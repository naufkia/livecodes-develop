import type { Config } from '../models';
import { getLanguageByAlias } from '../languages';
import { compileInCompiler } from './compile-in-compiler';

interface CompileBlocksOptions {
  removeEnclosingTemplate?: boolean;
  languageAttribute?: 'lang' | 'type';
}

export const compileBlocks = async (
  code: string,
  blockElement: 'template' | 'style' | 'script',
  config: Config,
  options: CompileBlocksOptions = {},
) => {
  const getBlockPattern = (el: typeof blockElement, langAttr = 'lang') =>
    `(<${el}(?:[^(?:${langAttr})]*))(?:\\s${langAttr}=["']([A-Za-z0-9 _]*)["'])((?:[^>]*)>)([\\s\\S]*?)(<\\/${el}>)`;
  const pattern = getBlockPattern(blockElement, options.languageAttribute);
  const blocks: string[] = [];
  for (const arr of [...code.matchAll(new RegExp(pattern, 'g'))]) {
    const [element, opentagPre, language, opentagPost, content, closetag] = arr;
    if (!language || !content) {
      blocks.push(element);
    } else {
      const compiled = await compileInCompiler(content, getLanguageByAlias(language), config);
      blocks.push(
        element.replace(
          new RegExp(pattern, 'g'),
          blockElement === 'template' && options.removeEnclosingTemplate
            ? compiled
            : opentagPre + opentagPost + compiled + closetag,
        ),
      );
    }
  }
  return code.replace(new RegExp(pattern, 'g'), () => blocks.pop() || '');
};

export const compileAllBlocks = async (
  code: string,
  config: Config,
  options: CompileBlocksOptions = {},
) => {
  const blockElements: Array<'template' | 'style' | 'script'> = ['template', 'style', 'script'];
  for (const el of blockElements) {
    code = await compileBlocks(code, el, config, options);
  }
  return code;
};

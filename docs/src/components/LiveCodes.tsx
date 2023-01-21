import React from 'react';
/* eslint-disable import/no-internal-modules */
import type { EmbedOptions } from '../../../src/sdk';
import LiveCodesReact from '../../../src/sdk/react';
import { appUrl } from '../utils';
import ShowCode from './ShowCode';
import styles from './LiveCodes.module.css';

export default function LiveCodes(
  props: EmbedOptions & {
    style?: Record<string, string>;
    className?: string;
    showCode?: boolean;
  },
): JSX.Element {
  const { className, style, showCode, ...options } = props;

  const jsCode = `
import { createPlayground } from 'livecodes';

const options = ${JSON.stringify(options, null, 2)};
createPlayground('#container', options);

`.trimStart();

  const tsCode = `
import { createPlayground, type EmbedOptions } from 'livecodes';

const options: EmbedOptions = ${JSON.stringify(options, null, 2)};
createPlayground('#container', options);

`.trimStart();

  const reactCode = `
import LiveCodes from 'livecodes/react';
export default function App() {
  const options = ${JSON.stringify(options, null, 2)};
  return (<LiveCodes {...options}></LiveCodes>);
}

`.trimStart();

  const vueCode = `
<script setup>
import LiveCodes from "livecodes/vue";
const options = ${JSON.stringify(options, null, 2)};
</script>
<template>
  <LiveCodes v-bind="options" />
</template>

`;

  return (
    <>
      <LiveCodesReact
        className={`${styles.container} ${props.className}`}
        style={{
          height: '50vh',
          ...props.style,
        }}
        appUrl={appUrl}
        {...props}
      ></LiveCodesReact>
      {props.showCode !== false && (
        <ShowCode js={jsCode} ts={tsCode} react={reactCode} vue={vueCode}></ShowCode>
      )}
    </>
  );
}

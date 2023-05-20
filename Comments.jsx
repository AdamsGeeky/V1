import Giscus from '@giscus/react';
import React from 'react';

export default function Comments() {
  return (
    <Giscus
  repo="AdamsGeeky/Adams"
  repoId="MDEwOlJlcG9zaXRvcnkzMTM1Nzc4OTY="
  category="comments"
  categoryId="DIC_kwDOErDRqM4CWnyx"
  mapping="url"
  strict="0"
  reactionsEnabled="1"
  emitMetadata="1"
  inputPosition="top"
  theme="light"
  lang="en"
  loading="lazy"
    />
  );
}
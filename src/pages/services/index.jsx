import React from 'react';
import Layout from '@theme/Layout';

export default function Services() {
  return (
    <Layout title="Sevvices" description="Services">
      <div>
        <p>
        Welcome to GeekInk, your go-to destination for comprehensive technology services designed to bridge gaps, provide holistic solutions, and empower individuals in the northern part of Nigeria.
        </p>
        <ul class="tabs tabs--block">
          <li class="tabs__item tabs__item--active">Computer treaning</li>
          <li class="tabs__item">Hardware Maintainace</li>
          <li class="tabs__item">Software Development</li>
          <li class="tabs__item">Website Development</li>
        </ul>
      </div>
    </Layout>
  );
}
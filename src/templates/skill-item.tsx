import React from "react";
import { ContentfulSkill } from '../../types/graphql-types';
import { TemplateProps } from './types';

import ContentfulRichText from '../components/contentfulRichText';
import { Wrapper } from './styles'
import Layout from "../components/layout";


const SkillItemTemplate: React.FC<TemplateProps<ContentfulSkill>> = ({ pageContext }: TemplateProps<ContentfulSkill>) => {
  const { name, category, summary } = pageContext.node;

  return (
    <Layout>
      <Wrapper>
        <h2>{name}</h2>
        <p>{category}</p>

        <ContentfulRichText
          className="skill"
          document={summary?.json}
        />

      </Wrapper>
    </Layout>
  );
}

export default SkillItemTemplate;

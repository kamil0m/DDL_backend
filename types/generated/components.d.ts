import type { Schema, Struct } from '@strapi/strapi';

export interface CtaCallToAction extends Struct.ComponentSchema {
  collectionName: 'components_cta_call_to_actions';
  info: {
    displayName: 'CallToAction';
  };
  attributes: {
    Link: Schema.Attribute.String & Schema.Attribute.Required;
    Wezwanie: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cta.call-to-action': CtaCallToAction;
    }
  }
}

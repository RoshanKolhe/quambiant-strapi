import type { Schema, Struct } from '@strapi/strapi';

export interface CommonContactUs extends Struct.ComponentSchema {
  collectionName: 'components_common_contactuses';
  info: {
    displayName: 'ContactUs';
    icon: 'phone';
  };
  attributes: {
    contactNumber: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    whatsAppNumber: Schema.Attribute.BigInteger & Schema.Attribute.Required;
  };
}

export interface CommonSharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_common_shared_sliders';
  info: {
    displayName: 'SharedSlider';
    icon: 'apps';
  };
  attributes: {
    customerName: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    state: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
  };
}

export interface HomepageCard extends Struct.ComponentSchema {
  collectionName: 'components_homepage_cards';
  info: {
    displayName: 'Card';
    icon: 'book';
  };
  attributes: {
    date: Schema.Attribute.Date;
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface HomepageHero extends Struct.ComponentSchema {
  collectionName: 'components_homepage_heroes';
  info: {
    description: '';
    displayName: 'hero';
    icon: 'house';
  };
  attributes: {
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    buttonUrl: Schema.Attribute.String & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    heroImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageSpotlight extends Struct.ComponentSchema {
  collectionName: 'components_homepage_spotlights';
  info: {
    displayName: 'Spotlight';
    icon: 'lightbulb';
  };
  attributes: {
    Card: Schema.Attribute.Component<'homepage.card', true>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    subheading: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface HomepageStatsSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_stats_sections';
  info: {
    displayName: 'StatsSection';
    icon: 'connector';
  };
  attributes: {
    heading: Schema.Attribute.String;
    statFourLabel: Schema.Attribute.String;
    statFourNumber: Schema.Attribute.BigInteger;
    statOneLabel: Schema.Attribute.String;
    statOneNumber: Schema.Attribute.BigInteger;
    statThreeLabel: Schema.Attribute.String;
    statThreeNumber: Schema.Attribute.BigInteger;
    statTwoLabel: Schema.Attribute.String;
    statTwoNumber: Schema.Attribute.BigInteger;
    subtitle: Schema.Attribute.Text;
  };
}

export interface HomepageSteps extends Struct.ComponentSchema {
  collectionName: 'components_homepage_steps';
  info: {
    displayName: 'Steps';
    icon: 'stack';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    StepHeading: Schema.Attribute.String;
    StepSubheading: Schema.Attribute.Text;
  };
}

export interface HomepageTimelineSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_timeline_sections';
  info: {
    displayName: 'TimelineSection';
    icon: 'clock';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    Steps: Schema.Attribute.Component<'homepage.steps', true>;
    Subheading: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.contact-us': CommonContactUs;
      'common.shared-slider': CommonSharedSlider;
      'homepage.card': HomepageCard;
      'homepage.hero': HomepageHero;
      'homepage.spotlight': HomepageSpotlight;
      'homepage.stats-section': HomepageStatsSection;
      'homepage.steps': HomepageSteps;
      'homepage.timeline-section': HomepageTimelineSection;
    }
  }
}

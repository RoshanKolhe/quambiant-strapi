import type { Schema, Struct } from '@strapi/strapi';

export interface CommonAwards extends Struct.ComponentSchema {
  collectionName: 'components_common_awards';
  info: {
    displayName: 'Awards';
  };
  attributes: {
    AwardsSlider: Schema.Attribute.Component<'common.awards-slider', true>;
    Heading: Schema.Attribute.String;
    SubHeading: Schema.Attribute.String;
  };
}

export interface CommonAwardsSlider extends Struct.ComponentSchema {
  collectionName: 'components_common_awards_sliders';
  info: {
    displayName: 'AwardsSlider';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface CommonContactUs extends Struct.ComponentSchema {
  collectionName: 'components_common_contactuses';
  info: {
    description: '';
    displayName: 'ContactUs';
    icon: 'phone';
  };
  attributes: {
    ContactNumber: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    WhatsAppNumber: Schema.Attribute.BigInteger & Schema.Attribute.Required;
  };
}

export interface CommonHomeStoriesSlider extends Struct.ComponentSchema {
  collectionName: 'components_common_home_stories_sliders';
  info: {
    description: '';
    displayName: 'HomeStoriesSlider';
  };
  attributes: {
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    Media: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    Name: Schema.Attribute.String;
    State: Schema.Attribute.String;
    SubHeading: Schema.Attribute.String & Schema.Attribute.Required;
    ThumbnaiImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
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

export interface ContactUsHero extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    HeroImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface ContactUsSocial extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_socials';
  info: {
    displayName: 'Social';
  };
  attributes: {
    Email: Schema.Attribute.Email;
    FaceBook: Schema.Attribute.String & Schema.Attribute.Required;
    Instagram: Schema.Attribute.String;
    PhoneNumber: Schema.Attribute.BigInteger;
    YouTube: Schema.Attribute.String;
  };
}

export interface HomepageCard extends Struct.ComponentSchema {
  collectionName: 'components_homepage_cards';
  info: {
    description: '';
    displayName: 'Card';
    icon: 'book';
  };
  attributes: {
    Date: Schema.Attribute.Date;
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    SubTitle: Schema.Attribute.String & Schema.Attribute.Required;
    Title: Schema.Attribute.String;
  };
}

export interface HomepageGreenBuildingStats extends Struct.ComponentSchema {
  collectionName: 'components_homepage_green_building_stats';
  info: {
    displayName: 'GreenBuildingStats';
  };
  attributes: {
    BackgroundVideo: Schema.Attribute.Media<'files' | 'videos'> &
      Schema.Attribute.Required;
    Heading: Schema.Attribute.String;
    StatOneDescription: Schema.Attribute.String & Schema.Attribute.Required;
    StatOneValue: Schema.Attribute.String & Schema.Attribute.Required;
    StatThreeDescription: Schema.Attribute.String;
    StatThreeValue: Schema.Attribute.String;
    StatTwoDescription: Schema.Attribute.String;
    StatTwoValue: Schema.Attribute.String;
    SubHeading: Schema.Attribute.String;
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
    ButtonText: Schema.Attribute.String & Schema.Attribute.Required;
    ButtonUrl: Schema.Attribute.String & Schema.Attribute.Required;
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    HeroImage: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    HeroImageMobile: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    SubHeading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageHomeStories extends Struct.ComponentSchema {
  collectionName: 'components_homepage_home_stories';
  info: {
    displayName: 'HomeStories';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    HomeStoriesSlider: Schema.Attribute.Component<
      'common.home-stories-slider',
      true
    >;
    SubHeading: Schema.Attribute.String;
  };
}

export interface HomepageProjectShowcase extends Struct.ComponentSchema {
  collectionName: 'components_homepage_project_showcases';
  info: {
    displayName: 'ProjectShowcase';
  };
  attributes: {
    GallaryImage1: Schema.Attribute.Media<'files' | 'images'> &
      Schema.Attribute.Required;
    GallaryImage2: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    GallaryImage3: Schema.Attribute.Media<'files' | 'images'> &
      Schema.Attribute.Required;
    GallaryImage4: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    GallaryImage6: Schema.Attribute.Media<'images' | 'files'>;
    GallarySubTextSection5: Schema.Attribute.String;
    GallaryTextSection5: Schema.Attribute.String & Schema.Attribute.Required;
    Heading: Schema.Attribute.String;
    SpotlightImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    StoryCard: Schema.Attribute.Component<'homepage.story-card', true>;
    StoryCardSliderHeading: Schema.Attribute.String & Schema.Attribute.Required;
    SubHeading: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface HomepageProjectSteps extends Struct.ComponentSchema {
  collectionName: 'components_homepage_project_steps';
  info: {
    displayName: 'ProjectSteps';
  };
  attributes: {
    Date: Schema.Attribute.Date;
    ProjectStatus: Schema.Attribute.Enumeration<
      ['Ongoing', 'Upcoming', 'Completed']
    >;
    Title: Schema.Attribute.String;
  };
}

export interface HomepageProjects extends Struct.ComponentSchema {
  collectionName: 'components_homepage_projects';
  info: {
    description: '';
    displayName: 'Projects';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Location: Schema.Attribute.String;
    ProjectSteps: Schema.Attribute.Component<'homepage.project-steps', true>;
    SubTitle: Schema.Attribute.String;
    Tags: Schema.Attribute.Component<'homepage.tags', true>;
    Title: Schema.Attribute.String;
  };
}

export interface HomepageSpotlight extends Struct.ComponentSchema {
  collectionName: 'components_homepage_spotlights';
  info: {
    description: '';
    displayName: 'Spotlight';
    icon: 'lightbulb';
  };
  attributes: {
    Card: Schema.Attribute.Component<'homepage.card', true>;
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    SubHeading: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface HomepageStatsSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_stats_sections';
  info: {
    description: '';
    displayName: 'StatsSection';
    icon: 'connector';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    StatFourLabel: Schema.Attribute.String;
    StatFourNumber: Schema.Attribute.BigInteger;
    StatOneLabel: Schema.Attribute.String;
    StatOneNumber: Schema.Attribute.BigInteger;
    StatThreeLabel: Schema.Attribute.String;
    StatThreeNumber: Schema.Attribute.BigInteger;
    StatTwoLabel: Schema.Attribute.String;
    StatTwoNumber: Schema.Attribute.BigInteger;
    SubHeading: Schema.Attribute.Text;
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

export interface HomepageStoryCard extends Struct.ComponentSchema {
  collectionName: 'components_homepage_story_cards';
  info: {
    displayName: 'StoryCard';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    SubTitle: Schema.Attribute.String & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageTags extends Struct.ComponentSchema {
  collectionName: 'components_homepage_tags';
  info: {
    displayName: 'Tags';
  };
  attributes: {
    Label: Schema.Attribute.String;
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

export interface HomepageUpcomingLaunches extends Struct.ComponentSchema {
  collectionName: 'components_homepage_upcoming_launches';
  info: {
    displayName: 'UpcomingLaunches';
  };
  attributes: {
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    Projects: Schema.Attribute.Component<'homepage.projects', true>;
    SubHeading: Schema.Attribute.String;
  };
}

export interface InvestorLoungeCeoMessage extends Struct.ComponentSchema {
  collectionName: 'components_investor_lounge_ceo_messages';
  info: {
    displayName: 'CeoMessage';
  };
  attributes: {
    AuthorName: Schema.Attribute.String & Schema.Attribute.Required;
    AuthorTitle: Schema.Attribute.String & Schema.Attribute.Required;
    AvatarImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Date: Schema.Attribute.Date & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface InvestorLoungeCommunication extends Struct.ComponentSchema {
  collectionName: 'components_investor_lounge_communications';
  info: {
    description: '';
    displayName: 'Communication';
  };
  attributes: {
    CeoMessage: Schema.Attribute.Component<
      'investor-lounge.ceo-message',
      false
    >;
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    MarketUpdate: Schema.Attribute.Component<
      'investor-lounge.ceo-message',
      false
    >;
    Strategy: Schema.Attribute.Component<'investor-lounge.ceo-message', false>;
    SubHeading: Schema.Attribute.Text;
  };
}

export interface InvestorLoungeCompanyProfile extends Struct.ComponentSchema {
  collectionName: 'components_investor_lounge_company_profiles';
  info: {
    description: '';
    displayName: 'CompanyProfile';
  };
  attributes: {
    CompanyStatistics: Schema.Attribute.Component<
      'investor-lounge.company-statistics',
      true
    >;
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Profile: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    SubHeading: Schema.Attribute.Text;
  };
}

export interface InvestorLoungeCompanyStatistics
  extends Struct.ComponentSchema {
  collectionName: 'components_investor_lounge_company_statistics';
  info: {
    displayName: 'CompanyStatistics';
  };
  attributes: {
    LabelStats: Schema.Attribute.String;
  };
}

export interface InvestorLoungeConnectWithUs extends Struct.ComponentSchema {
  collectionName: 'components_investor_lounge_connect_withuses';
  info: {
    displayName: 'ConnectWithUs';
  };
  attributes: {
    Email: Schema.Attribute.Email & Schema.Attribute.Required;
    OfiiceAddress: Schema.Attribute.Text & Schema.Attribute.Required;
    Phone: Schema.Attribute.BigInteger;
    RelationHeading: Schema.Attribute.String & Schema.Attribute.Required;
    RelationSubHeading: Schema.Attribute.Text;
  };
}

export interface InvestorLoungeHero extends Struct.ComponentSchema {
  collectionName: 'components_investor_lounge_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    HeroImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    SubHeading: Schema.Attribute.Text;
  };
}

export interface NewsroomHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_newsroom_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files'>;
    SubHeading: Schema.Attribute.String;
  };
}

export interface NewsroomNewsRoomSlider extends Struct.ComponentSchema {
  collectionName: 'components_newsroom_news_room_sliders';
  info: {
    description: '';
    displayName: 'NewsRoomSlider';
  };
  attributes: {
    ButtonLink: Schema.Attribute.String & Schema.Attribute.Required;
    ButtonText: Schema.Attribute.String & Schema.Attribute.Required;
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    Image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    ReadTime: Schema.Attribute.String & Schema.Attribute.Required;
    SubHeading: Schema.Attribute.String;
    Tags: Schema.Attribute.Component<'homepage.tags', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.awards': CommonAwards;
      'common.awards-slider': CommonAwardsSlider;
      'common.contact-us': CommonContactUs;
      'common.home-stories-slider': CommonHomeStoriesSlider;
      'common.shared-slider': CommonSharedSlider;
      'contact-us.hero': ContactUsHero;
      'contact-us.social': ContactUsSocial;
      'homepage.card': HomepageCard;
      'homepage.green-building-stats': HomepageGreenBuildingStats;
      'homepage.hero': HomepageHero;
      'homepage.home-stories': HomepageHomeStories;
      'homepage.project-showcase': HomepageProjectShowcase;
      'homepage.project-steps': HomepageProjectSteps;
      'homepage.projects': HomepageProjects;
      'homepage.spotlight': HomepageSpotlight;
      'homepage.stats-section': HomepageStatsSection;
      'homepage.steps': HomepageSteps;
      'homepage.story-card': HomepageStoryCard;
      'homepage.tags': HomepageTags;
      'homepage.timeline-section': HomepageTimelineSection;
      'homepage.upcoming-launches': HomepageUpcomingLaunches;
      'investor-lounge.ceo-message': InvestorLoungeCeoMessage;
      'investor-lounge.communication': InvestorLoungeCommunication;
      'investor-lounge.company-profile': InvestorLoungeCompanyProfile;
      'investor-lounge.company-statistics': InvestorLoungeCompanyStatistics;
      'investor-lounge.connect-with-us': InvestorLoungeConnectWithUs;
      'investor-lounge.hero': InvestorLoungeHero;
      'newsroom.hero-section': NewsroomHeroSection;
      'newsroom.news-room-slider': NewsroomNewsRoomSlider;
    }
  }
}

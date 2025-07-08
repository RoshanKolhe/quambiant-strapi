import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsJourney extends Struct.ComponentSchema {
  collectionName: 'components_about_us_journeys';
  info: {
    displayName: 'Journey';
  };
  attributes: {
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
    Year: Schema.Attribute.BigInteger & Schema.Attribute.Required;
  };
}

export interface AboutUsJourneyTimeline extends Struct.ComponentSchema {
  collectionName: 'components_about_us_journey_timelines';
  info: {
    displayName: 'JourneyTimeline';
  };
  attributes: {
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    Journey: Schema.Attribute.Component<'about-us.journey', true>;
  };
}

export interface AboutUsPillars extends Struct.ComponentSchema {
  collectionName: 'components_about_us_pillars';
  info: {
    description: '';
    displayName: 'Pillars';
  };
  attributes: {
    Letter: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 1;
      }>;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutUsPillarsSection extends Struct.ComponentSchema {
  collectionName: 'components_about_us_pillars_sections';
  info: {
    description: '';
    displayName: 'PillarsSection';
  };
  attributes: {
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Pillars: Schema.Attribute.Component<'about-us.pillars', true>;
    SubHeading: Schema.Attribute.String;
  };
}

export interface AboutUsTeamIntroSection extends Struct.ComponentSchema {
  collectionName: 'components_about_us_team_intro_sections';
  info: {
    description: '';
    displayName: 'TeamIntroSection';
  };
  attributes: {
    FeaturedImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    FeaturedName: Schema.Attribute.String & Schema.Attribute.Required;
    FeaturedRole: Schema.Attribute.String & Schema.Attribute.Required;
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    isVisible: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    LinkedIn: Schema.Attribute.String & Schema.Attribute.Required;
    SubHeading: Schema.Attribute.String;
  };
}

export interface AboutUsTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_about_us_team_members';
  info: {
    description: '';
    displayName: 'TeamMember';
  };
  attributes: {
    LinkedIn: Schema.Attribute.String & Schema.Attribute.Required;
    MemberImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    MemberName: Schema.Attribute.String & Schema.Attribute.Required;
    MemberRole: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutUsWhoWeAreSection extends Struct.ComponentSchema {
  collectionName: 'components_about_us_who_we_are_sections';
  info: {
    displayName: 'WhoWeAreSection';
  };
  attributes: {
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    SubHeading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CareerConnectWithUs extends Struct.ComponentSchema {
  collectionName: 'components_career_connect_withuses';
  info: {
    displayName: 'ConnectWithUs';
  };
  attributes: {
    BenefitOneSubTitle: Schema.Attribute.String;
    BenefitOneTitle: Schema.Attribute.String & Schema.Attribute.Required;
    BenefitThreeSubTitle: Schema.Attribute.String;
    BenefitThreeTitle: Schema.Attribute.String & Schema.Attribute.Required;
    BenefitTwoSubTitle: Schema.Attribute.String;
    BenefitTwoTitle: Schema.Attribute.String & Schema.Attribute.Required;
    CardSubtitle: Schema.Attribute.String;
    CardTitle: Schema.Attribute.String & Schema.Attribute.Required;
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    SubHeading: Schema.Attribute.String;
    Testimonial: Schema.Attribute.Component<'career.testimonial', false>;
  };
}

export interface CareerHero extends Struct.ComponentSchema {
  collectionName: 'components_career_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    HeroHeading: Schema.Attribute.String & Schema.Attribute.Required;
    HeroImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    HeroSubHeading: Schema.Attribute.String;
  };
}

export interface CareerJoinOurTeam extends Struct.ComponentSchema {
  collectionName: 'components_career_join_our_teams';
  info: {
    displayName: 'JoinOurTeam';
  };
  attributes: {
    CardFourSubTitle: Schema.Attribute.String & Schema.Attribute.Required;
    CardFourTitle: Schema.Attribute.String & Schema.Attribute.Required;
    CardOneSubTitle: Schema.Attribute.String & Schema.Attribute.Required;
    CardOneTitle: Schema.Attribute.String & Schema.Attribute.Required;
    CardThreeSubTitle: Schema.Attribute.String & Schema.Attribute.Required;
    CardThreeTitle: Schema.Attribute.String & Schema.Attribute.Required;
    CardTwoSubTitle: Schema.Attribute.String & Schema.Attribute.Required;
    CardTwoTitle: Schema.Attribute.String & Schema.Attribute.Required;
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    SubHeading: Schema.Attribute.String;
  };
}

export interface CareerMissionAndVision extends Struct.ComponentSchema {
  collectionName: 'components_career_mission_and_visions';
  info: {
    displayName: 'MissionAndVision';
  };
  attributes: {
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    OurMissionImage: Schema.Attribute.Media<'images' | 'files'>;
    OurMissionSubTitle: Schema.Attribute.String;
    OurMissionTitle: Schema.Attribute.String & Schema.Attribute.Required;
    OurVisionImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    OurVisionSubTitle: Schema.Attribute.String;
    OurVisionTitle: Schema.Attribute.String;
    SubHeading: Schema.Attribute.String;
  };
}

export interface CareerTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_career_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    AuthorName: Schema.Attribute.String & Schema.Attribute.Required;
    AuthorRole: Schema.Attribute.String & Schema.Attribute.Required;
    Quote: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

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

export interface CommonDisclaimer extends Struct.ComponentSchema {
  collectionName: 'components_common_disclaimers';
  info: {
    displayName: 'Disclaimer';
  };
  attributes: {
    Disclaimer: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface CommonFaq extends Struct.ComponentSchema {
  collectionName: 'components_common_faqs';
  info: {
    description: '';
    displayName: 'Faq';
  };
  attributes: {
    ButtonLink: Schema.Attribute.String & Schema.Attribute.Required;
    ButtonText: Schema.Attribute.String & Schema.Attribute.Required;
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    QustionAndAnswers: Schema.Attribute.Component<
      'common.qustion-and-answers',
      true
    >;
    SubHeading: Schema.Attribute.String;
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

export interface CommonPrivacyPolicy extends Struct.ComponentSchema {
  collectionName: 'components_common_privacy_policies';
  info: {
    displayName: 'PrivacyPolicy';
  };
  attributes: {
    PrivacyPolicy: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface CommonQustionAndAnswers extends Struct.ComponentSchema {
  collectionName: 'components_common_qustion_and_answers';
  info: {
    displayName: 'QustionAndAnswers';
  };
  attributes: {
    Answer: Schema.Attribute.Text & Schema.Attribute.Required;
    Question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonReraDisclaimer extends Struct.ComponentSchema {
  collectionName: 'components_common_rera_disclaimers';
  info: {
    displayName: 'ReraDisclaimer';
  };
  attributes: {
    ReraDisclaimer: Schema.Attribute.Blocks & Schema.Attribute.Required;
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

export interface CommonTermsAndConditions extends Struct.ComponentSchema {
  collectionName: 'components_common_terms_and_conditions';
  info: {
    description: '';
    displayName: 'TermsAndConditions';
  };
  attributes: {
    TermsAndConditions: Schema.Attribute.Blocks & Schema.Attribute.Required;
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

export interface CsrCsrInitiatives extends Struct.ComponentSchema {
  collectionName: 'components_csr_csr_initiatives';
  info: {
    displayName: 'CsrInitiatives';
  };
  attributes: {
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    Initiatives: Schema.Attribute.Component<'csr.initiatives', true>;
    SubHeading: Schema.Attribute.String;
  };
}

export interface CsrCsrPhilosophy extends Struct.ComponentSchema {
  collectionName: 'components_csr_csr_philosophies';
  info: {
    displayName: 'CsrPhilosophy';
  };
  attributes: {
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    Slider: Schema.Attribute.Component<'csr.slider', true>;
    SubHeading: Schema.Attribute.String;
  };
}

export interface CsrCsrResource extends Struct.ComponentSchema {
  collectionName: 'components_csr_csr_resources';
  info: {
    displayName: 'CsrResource';
  };
  attributes: {
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    Resources: Schema.Attribute.Component<'csr.resources', true>;
    SubHeading: Schema.Attribute.String;
  };
}

export interface CsrEvents extends Struct.ComponentSchema {
  collectionName: 'components_csr_events';
  info: {
    displayName: 'Events';
  };
  attributes: {
    date: Schema.Attribute.Date & Schema.Attribute.Required;
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Location: Schema.Attribute.String;
    SubTitle: Schema.Attribute.String;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CsrHero extends Struct.ComponentSchema {
  collectionName: 'components_csr_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    SubHeading: Schema.Attribute.String;
  };
}

export interface CsrInitiatives extends Struct.ComponentSchema {
  collectionName: 'components_csr_initiatives';
  info: {
    displayName: 'Initiatives';
  };
  attributes: {
    date: Schema.Attribute.Date & Schema.Attribute.Required;
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Location: Schema.Attribute.String;
    SubTitle: Schema.Attribute.String;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CsrJoinUs extends Struct.ComponentSchema {
  collectionName: 'components_csr_joinuses';
  info: {
    displayName: 'JoinUs';
  };
  attributes: {
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    SubHeading: Schema.Attribute.String;
  };
}

export interface CsrResources extends Struct.ComponentSchema {
  collectionName: 'components_csr_resources';
  info: {
    displayName: 'Resources';
  };
  attributes: {
    File: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    SubTitle: Schema.Attribute.String;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CsrSlider extends Struct.ComponentSchema {
  collectionName: 'components_csr_sliders';
  info: {
    displayName: 'Slider';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    SubTitle: Schema.Attribute.String;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CsrUpcomingCsrEvents extends Struct.ComponentSchema {
  collectionName: 'components_csr_upcoming_csr_events';
  info: {
    displayName: 'UpcomingCsrEvents';
  };
  attributes: {
    Events: Schema.Attribute.Component<'csr.events', true>;
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    SubHeading: Schema.Attribute.String;
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
    completionStatus: Schema.Attribute.String & Schema.Attribute.Required;
    heroImage: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
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

export interface ProjectAmenityCategory extends Struct.ComponentSchema {
  collectionName: 'components_project_amenity_categories';
  info: {
    description: '';
    displayName: 'amenityCategory';
  };
  attributes: {
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'project.items', true>;
    subHeading: Schema.Attribute.String;
  };
}

export interface ProjectAwards extends Struct.ComponentSchema {
  collectionName: 'components_project_awards';
  info: {
    displayName: 'awards';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProjectCalculator extends Struct.ComponentSchema {
  collectionName: 'components_project_calculators';
  info: {
    displayName: 'calculator';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String;
    priceInCr: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface ProjectExperience extends Struct.ComponentSchema {
  collectionName: 'components_project_experiences';
  info: {
    description: '';
    displayName: 'experience';
  };
  attributes: {
    experienceItem: Schema.Attribute.Component<'project.experience-item', true>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    subHeading: Schema.Attribute.String;
    testimonialBy: Schema.Attribute.String & Schema.Attribute.Required;
    testimonialText: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProjectExperienceItem extends Struct.ComponentSchema {
  collectionName: 'components_project_experience_items';
  info: {
    displayName: 'experienceItem';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    highlightQuote: Schema.Attribute.String & Schema.Attribute.Required;
    highlightText: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProjectItems extends Struct.ComponentSchema {
  collectionName: 'components_project_items';
  info: {
    displayName: 'items';
  };
  attributes: {
    sliderImages: Schema.Attribute.Component<'project.slider-images', true>;
    thumbnail: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProjectKeyFeatures extends Struct.ComponentSchema {
  collectionName: 'components_project_key_features';
  info: {
    displayName: 'keyFeatures';
  };
  attributes: {
    feature: Schema.Attribute.String;
  };
}

export interface ProjectLayoutSlide extends Struct.ComponentSchema {
  collectionName: 'components_project_layout_slides';
  info: {
    displayName: 'layoutSlide';
  };
  attributes: {
    apartmentType: Schema.Attribute.String & Schema.Attribute.Required;
    carpetArea: Schema.Attribute.String & Schema.Attribute.Required;
    svgImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface ProjectMediaGroups extends Struct.ComponentSchema {
  collectionName: 'components_project_media_groups';
  info: {
    displayName: 'mediaGroups';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    label: Schema.Attribute.Enumeration<['Interior', 'Exterior']>;
  };
}

export interface ProjectNeighborhood extends Struct.ComponentSchema {
  collectionName: 'components_project_neighborhoods';
  info: {
    displayName: 'neighborhood';
  };
  attributes: {
    places: Schema.Attribute.Component<'project.places', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProjectPlaces extends Struct.ComponentSchema {
  collectionName: 'components_project_places';
  info: {
    displayName: 'places';
  };
  attributes: {
    latitude: Schema.Attribute.String & Schema.Attribute.Required;
    longitude: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProjectProjectGallery extends Struct.ComponentSchema {
  collectionName: 'components_project_project_galleries';
  info: {
    displayName: 'projectGallery';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    mediaGroups: Schema.Attribute.Component<'project.media-groups', true>;
    subHeading: Schema.Attribute.String;
    video: Schema.Attribute.Media<'files' | 'videos'> &
      Schema.Attribute.Required;
  };
}

export interface ProjectProjectLayout extends Struct.ComponentSchema {
  collectionName: 'components_project_project_layouts';
  info: {
    displayName: 'projectLayout';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    layoutSlide: Schema.Attribute.Component<'project.layout-slide', true>;
    subHeading: Schema.Attribute.String;
  };
}

export interface ProjectProjectOverviews extends Struct.ComponentSchema {
  collectionName: 'components_project_project_overviews';
  info: {
    displayName: ' projectOverviews';
  };
  attributes: {
    apartmentTypes: Schema.Attribute.String & Schema.Attribute.Required;
    images: Schema.Attribute.Media<'images' | 'files', true>;
    occupancyRate: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    totalArea: Schema.Attribute.String & Schema.Attribute.Required;
    totalFloors: Schema.Attribute.String;
  };
}

export interface ProjectSliderImages extends Struct.ComponentSchema {
  collectionName: 'components_project_slider_images';
  info: {
    displayName: 'sliderImages';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProjectTimeline extends Struct.ComponentSchema {
  collectionName: 'components_project_timelines';
  info: {
    displayName: 'timeline';
  };
  attributes: {
    date: Schema.Attribute.Date;
    description: Schema.Attribute.String;
    stageStatus: Schema.Attribute.Enumeration<
      ['Completed', 'In Progress', 'Pending']
    >;
    stageTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us.journey': AboutUsJourney;
      'about-us.journey-timeline': AboutUsJourneyTimeline;
      'about-us.pillars': AboutUsPillars;
      'about-us.pillars-section': AboutUsPillarsSection;
      'about-us.team-intro-section': AboutUsTeamIntroSection;
      'about-us.team-member': AboutUsTeamMember;
      'about-us.who-we-are-section': AboutUsWhoWeAreSection;
      'career.connect-with-us': CareerConnectWithUs;
      'career.hero': CareerHero;
      'career.join-our-team': CareerJoinOurTeam;
      'career.mission-and-vision': CareerMissionAndVision;
      'career.testimonial': CareerTestimonial;
      'common.awards': CommonAwards;
      'common.awards-slider': CommonAwardsSlider;
      'common.contact-us': CommonContactUs;
      'common.disclaimer': CommonDisclaimer;
      'common.faq': CommonFaq;
      'common.home-stories-slider': CommonHomeStoriesSlider;
      'common.privacy-policy': CommonPrivacyPolicy;
      'common.qustion-and-answers': CommonQustionAndAnswers;
      'common.rera-disclaimer': CommonReraDisclaimer;
      'common.shared-slider': CommonSharedSlider;
      'common.terms-and-conditions': CommonTermsAndConditions;
      'contact-us.hero': ContactUsHero;
      'contact-us.social': ContactUsSocial;
      'csr.csr-initiatives': CsrCsrInitiatives;
      'csr.csr-philosophy': CsrCsrPhilosophy;
      'csr.csr-resource': CsrCsrResource;
      'csr.events': CsrEvents;
      'csr.hero': CsrHero;
      'csr.initiatives': CsrInitiatives;
      'csr.join-us': CsrJoinUs;
      'csr.resources': CsrResources;
      'csr.slider': CsrSlider;
      'csr.upcoming-csr-events': CsrUpcomingCsrEvents;
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
      'project.amenity-category': ProjectAmenityCategory;
      'project.awards': ProjectAwards;
      'project.calculator': ProjectCalculator;
      'project.experience': ProjectExperience;
      'project.experience-item': ProjectExperienceItem;
      'project.items': ProjectItems;
      'project.key-features': ProjectKeyFeatures;
      'project.layout-slide': ProjectLayoutSlide;
      'project.media-groups': ProjectMediaGroups;
      'project.neighborhood': ProjectNeighborhood;
      'project.places': ProjectPlaces;
      'project.project-gallery': ProjectProjectGallery;
      'project.project-layout': ProjectProjectLayout;
      'project.project-overviews': ProjectProjectOverviews;
      'project.slider-images': ProjectSliderImages;
      'project.timeline': ProjectTimeline;
    }
  }
}

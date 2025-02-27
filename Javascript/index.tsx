
import { ReactNode } from 'react';
import { TableRow } from './Table';
import { SelectProps } from './MultiSelectGroup';
import { InputAreaConfigProps } from './InputArea';
import { RadioProps } from './RadioGroup';
import { EditContext, ReviewGeneratedTopicsList, TopicOutline } from './GeneratedContent';

export interface ConfigurationContextProps {
  inputAreaConfiguration: string;
  aimInputAreaConfiguration: string;
  textAreaConfiguration: string;
  radioConfiguration: RadioProps;
  multiselectConfiguration: SelectProps[];
  tableConfiguration: TableRow[] | TableRow;
  listConfiguration: InputAreaConfigProps[];
  successConfiguration: string[];
  reviewConfiguration: TableProps[];
  reviewGeneratedContent: ReviewGeneratedTopicsList;
  editGeneratedContent: EditContext[];
  sourceMaterials: { title: string; chunks: string }[];
  inApiRequest: boolean;
  switchInAPIRequest: () => void;
}

export interface ConfigurationProviderProps {
  children: ReactNode;
}


import { DefaultComponentProps } from './DefaultComponentProps';
import { ReviewTableAction } from './Table';

export interface DefaultGeneratedContent {
  review: 'pending' | 'complete';
  versionIndexSelected: number;
  styleIndexSelected: number;
}

export interface Citations {
  id: string;
  title: string;
  chunks: string;
}

export interface EditContext {
  review: 'completed' | 'pending';
  selectedVersion: number;
  versions: TopicOutline[][][] | FacilitatorAndContentSlide[][][] | QuestionChoicesAnswer[][][] | ContentSlide[][][];
}

export interface TopicOutline {
  title: string;
  objectives: string;
}

export interface TopicOutlineResponse extends TopicOutline {
  citations?: Citations[];
}

export interface ContentSlide {
  heading: string;
  bullet_points: string;
}

export interface FacilitatorAndContentSlide extends ContentSlide {
  script: string;
}

export interface ContentSlideResponse {
  slides: ContentSlide[];
  citations?: Citations[];
}

export interface FacilitatorAndContentSlideResponse {
  slides: FacilitatorAndContentSlide[];
  citations?: Citations[];
}

export interface QuestionChoicesAnswer {
  question: string;
  choices: string;
  answer: string;
}

export interface QuestionChoicesAnswerResponse {
  questions: QuestionChoicesAnswer[];
  contexts?: string;
}

export interface RepromptFacilitatorScript {
  heading: string;
  script: string;
}

export interface RepromptFacilitatorBullets {
  heading: string;
  bullet_points: string;
}

export interface ReviewGeneratedTopicsList extends DefaultComponentProps {
  list: ReviewGeneratedTopics[];
}

export interface ReviewGeneratedTopics {
  Objectives?: string;
  Heading?: string;
  action: ReviewTableAction;
}

export interface DocumentDownloadRequest {
  module_title: string;
  extension: string;
  topics: DocumentContent[];
}

export interface DocumentContent {
  topic_outline: TopicOutline;
  content: DocumentQuestions | DocumentSlides;
}

export interface DocumentQuestions {
  questions?: QuestionChoicesAnswer[];
}

export interface DocumentSlides {
  slides?: FacilitatorAndContentSlide[] | ContentSlide[];
}

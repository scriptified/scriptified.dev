import CodeSnippet from '../components/common/CodeSnippet';

import { Language } from 'prism-react-renderer';

export default interface CodeSnippet {
  code: string;
  language: Language;
}

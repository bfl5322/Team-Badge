import { html } from 'lit';
import '../src/team-badge.js';

export default {
  title: 'TeamBadge',
  component: 'team-badge',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <team-badge
      style="--team-badge-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </team-badge>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};

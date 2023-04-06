import { LitElement, html, css } from 'lit';
import './team-badge.js';

class teamresource extends LitElement {
    static get tag() {
        return 'team-resource';
    }

    static properties = {
        header: { type: String },
        detail: { type: String },
        team: { type: Array },
      }

    static get styles() {
        return css`
        :host {
            display: block;
        }
        
        .item {
            padding: 20px;
<<<<<<< HEAD
            width: 100%;  
=======
            width: 100%;
            
>>>>>>> 2e1b182becbf514867655117ff43d7a621f0b8fb
        }
        
    `;
    }



constructor() {
    super();
    this.team = [
      {
        "name": "Amazon Cognito",
        "image": "https://www.drupal.org/files/styles/grid-3-2x/public/project-images/553dbabbd287c26ca83aef42.jpg?itok=ruAqqobg",
        "location": "Milwaukee, WI",
        "wins": "53",
        "losses": "12",
        "Hof": "15" 
    },
    {
        "name": "Amazon I AM",
        "image": "https://i0.wp.com/sra.io/wp-content/uploads/2020/01/AWS-IAM-Exploitation.png?fit=1102%2C620&ssl=1",
        "location": "Philadelphia, PA",
        "wins": "49",
        "losses": "26",
        "Hof": "9" 
    },
    {
        "name": "Signing up for AWS Web Services",
        "image": "https://i.pcmag.com/imagery/reviews/0179dSC1AqaTy8DbcTJMDYE-7..v1569472044.jpg",
        "location": "New York, NY",
        "wins": "42",
        "losses": "33",
        "Hof": "22" 
    },
    {
        "name": "AWS - LAMBDA Phase 1",
        "image": "https://khalilstemmler.com/img/blog/serverless/aws-lambda.png",
        "location": "Boston, MA",
        "wins": "52",
        "losses": "23",
        "Hof": "37" 
    },
    {
        "name": "Amazon S3 Phase 1",
        "image": "https://www.cleo.com/sites/default/files/2018-10/logo_amazon-s3_module-11.png",
        "location": "Brooklyn, Nets",
        "wins": "40",
        "losses": "35",
        "Hof": "11" 
    }
    ]
  }

  render() {
    return html`
        <div class="wrapper">
            ${this.team.map(team => html`
            <div class="item">
                <team-badge name="${team.name}" image="${team.image}" location="${team.location}" wins="${team.wins}" losses="${team.losses}" Hof="${team.Hof}"></team-badge>
            </div>
            `)}
        </div>
    `;
  }
}
  

customElements.define('team-resource', teamresource);

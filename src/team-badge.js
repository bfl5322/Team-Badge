
import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/simple-icon.js';
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import '@lrnwebcomponents/a11y-collapse/a11y-collapse.js';



const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class TeamBadge extends LitElement {
  static properties = {
    header: { type: String,
      reflect: true
},
    detail: { type: String,
      reflect: true},
    team: { type: Array,
      reflect: true },
    name: { type: String,
      reflect: true },
    image: { type: String,
      reflect: true },
    location: { type: String,
      reflect: true },
    wins: { type: String,
      reflect: true },
    losses: { type: String,
      reflect: true },
    Hof: { type: String,
      reflect: true },
      
  };



  static get styles () {
    return css`
    :host {
      display: block;
      padding: 25px;
      color: var(--team-badge-text-color, #000);
    }
  img {
    float: center;
    width:  50px;
    height: 50px;
    background-size: cover;
  }
  .wrapper {
  padding: 0px;
  border-width: 2px 2px 2px 40px;
  border-style: solid;
  border-color: #3e98d3;
  border-radius: 12px;
  margin: -3%;
  color: #fff;
  background-color: white;
   }

   a11y-collapse {
    margin: 0px;
    background-color: lightblue;
    border-color: blue;
    border: none;
   }
   .content {
    background-color: white;
   }
   
    
    
  `;
  }
  constructor() {
    super();
    
    this.detail = 'Use the search bar to find your favorite team, and use the dropdown to learn more.';
    this.name = ""
    this.image = ""
    this.location = ""
    this.wins = ""
    this.losses = ""
    this.Hof = ""
  
}

  render() {
    return html`


 
    <div class="wrapper">
    <a11y-collapse icon="expand-more">
    <p slot="heading"><img src="${this.image}" alt="Team Logo" width="100" height="100"> ${this.name}</p>

          <div slot="content">
            <p>Location: ${this.location}</p>
            <p>Wins: ${this.wins}</p>
            <p>Losses: ${this.losses}</p>
            <p>Hall of Famers: ${this.Hof}</p>
          </div>
          </a11y-collapse>
    </div>
    `;
  }
}

customElements.define('team-badge', TeamBadge);
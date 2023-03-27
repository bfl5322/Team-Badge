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
  }

  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--team-badge-text-color, #000);
    }
  img {
    width: 100%;
    height: 100%;
  }
  .card {
   transition: 0.3s;
   width: 100%;
   color: blue;
    border: 1px solid blueviolet;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
  }
  .wrapper {
   padding: 2px 16px;
   color: blue;  
   width: auto;
   }
   .details {
    color: blue;
   }
   .header{
    font-size: 50px;
   }
    .searchbar {
      width: 100%;
      position: relative;
      display: flex;
    }
  `;

  constructor() {
    super();
    this.header = 'NBA Encyclopedia';
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

    <div class="card">
    <img src="${this.image}">
    <div class="wrapper">
    <h4><b>${this.name}</b></h4>

<a11y-collapse icon="add" heading="<p>Details</p>">
    <p>Location: ${this.location}</p>
    <p>Wins: ${this.wins}</p>
    <p>Losses: ${this.losses}</p>
    <p>Hall of Famers: ${this.Hof}</p>
</a11y-collapse> 

    </div>
    </div>
    `;
  }
}

customElements.define('team-badge', TeamBadge);
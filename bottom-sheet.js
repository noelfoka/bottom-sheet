import {LitElement, css, html} from 'lit';
import Fontawesome from 'lit-fontawesome';

export class BottomSheet extends LitElement {
  static properties = {
    version: {},
  };

  constructor() {
    super();
    this.version = 'STARTING';
  }

  render() {
    return html`
    <div class="container">
        <div class="top-bar">
            <div class="date">June 8</div>
            <div class="photos">
                <img src="photo1.jpg" alt="Photo 1" class="photo">
                <img src="photo2.jpg" alt="Photo 2" class="photo">
                <img src="photo3.jpg" alt="Photo 3" class="photo">
                <img src="photo4.jpg" alt="Photo 4" class="photo">
                <img src="photo5.jpg" alt="Photo 5" class="photo">
            </div>
            <div class="add-button">+</div>
        </div>
        <div class="options">
            <button class="option">Add photos</button>
            <button class="option">Save all</button>
            <button class="option">Share</button>
        </div>
        <div class="bottom-sheet" id="bottom-sheet">
            <div class="icons">
                <i class="fa-solid fa-share-nodes"></i>
                <i class="icon add-to"></i>
                <i class="icon trash"></i>
                <i class="icon order-prints"></i>
                <i class="icon move-to-archive"></i>
            </div>
            <div class="send-section">
                <div class="send-title">Send</div>
                <div class="contacts">
                    <div class="contact">
                        <img src="photo1.jpg" alt="Alejandro Ortega" class="contact-photo">
                        <div class="contact-name">Alejandro Ortega</div>
                    </div>
                    <div class="contact">
                        <img src="oli.jpg" alt="Oli Ortega" class="contact-photo">
                        <div class="contact-name">Oli Ortega</div>
                    </div>
                    <div class="contact">
                        <img src="carmen.jpg" alt="Carmen Villanueva" class="contact-photo">
                        <div class="contact-name">Carmen Villanueva</div>
                    </div>
                    <div class="contact">
                        <img src="ana.jpg" alt="Ana Russo" class="contact-photo">
                        <div class="contact-name">Ana Russo</div>
                    </div>
                    <div class="contact">
                        <img src="marty.jpg" alt="Marty Reyes" class="contact-photo">
                        <div class="contact-name">Marty Reyes</div>
                    </div>
                </div>
            </div>
            <div class="album-section">
                <button class="album-option">Add to album</button>
                <button class="album-option">View all</button>
            </div>
        </div>
    </div>
    `;
  }
}
customElements.define('bottom-sheet', BottomSheet);

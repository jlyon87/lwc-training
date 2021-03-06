import { LightningElement, api } from 'lwc';

export default class ContactRow extends LightningElement {
  @api contact

  clickContact() {
    this.dispatchClick('gotoContact', this.contact.Id)
  }

  dispatchClick(name, id) {
    const event = new CustomEvent(name.toLowerCase(), {
      bubbles: true,
      detail: id
    })
    this.dispatchEvent(event)
  }
}
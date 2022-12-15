import Adapter from './adapter';

export default class OfferGroupAdapter extends Adapter {
  /**
   * @param {Partial<OfferGroup>} data
   * @param {Partial<Offer>} offer
   */
  constructor(data = {}, offer = {}) {
    super();

    this.typeId = data.type;
    this.offerId = String(offer.id);
    this.offerTitle = offer.title;
    this.offerPrice = String(offer.price);
  }

  /**
   * @override
   * @return {Partial<OfferGroup>}
   */
  toJSON() {
    return {
      'type': this.typeId,
      'offer.id': this.offerId,
      'offer.title': this.offerTitle,
      'offer.price': this.offerPrice
    };
  }
}

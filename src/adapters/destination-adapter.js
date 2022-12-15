import Adapter from './adapter';

export default class DestinationAdapter extends Adapter {
  /**
   * @param {Partial<Destination>} data
   * @param {Partial<Picture>} pictures
   */
  constructor(data = {}, pictures = {}) {
    super();

    this.id = String(data.id);
    this.descriptionText = data.description;
    this.nameCity = data.name;
    this.photoSrc = pictures.src;
    this.photoText = pictures.description;
  }

  /**
   * @override
   * @return {Partial<Destination>}
   * @return {Partial<Picture>}
   */
  toJSON() {
    return {
      'id': this.id,
      'description': this.descriptionText,
      'name': this.nameCity,
      'pictures.src': this.photoSrc,
      'pictures.description': this.photoText
    };
  }
}

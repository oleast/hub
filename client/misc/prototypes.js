
import moment from 'moment'

String.prototype.getFormattedDate = function () {
  return moment(this.toString()).format('Do MMMM YYYY')
}

String.prototype.capitalizeOnlyFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
}

String.prototype.capitalizeFirstLetters = function() {
    return this.split(' ').map((s) => s = s.capitalizeOnlyFirstLetter()).join(' ')
}
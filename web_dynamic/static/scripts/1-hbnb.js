$(document).ready(function () {
  console.log('#### SCRIPT LOADED ####');
  const dataDict = {};
  /* detects if ANY checkbox on the page is changed
     May be necessary to narrow this scope to a
     more specific div or class
  */
  $('input[type="checkbox"]').on('change', function () {
    if (this.checked) {
      console.log('#### Box checked! ####');

      // add key/value to dict if id not already in it
      if (!($(this).attr('data-id') in dataDict)) {
        dataDict[$(this).attr('data-id')] = $(this).attr('data-name');
      }
    } else {
      console.log('#### Box UNchecked! ####');

      // remove key/value from dict if id is a duplicate
      delete dataDict[$(this).attr('data-id')];
      delete dataDict[$(this).attr('data-name')];
    }

    // appends dict values as stringified list to html
    $('.amenities').find('h4').text('');
    $('.amenities').find('h4').append(Object.values(dataDict).join(', '));
  });
});

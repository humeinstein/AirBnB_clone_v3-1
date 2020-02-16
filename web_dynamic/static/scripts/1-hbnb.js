/* If amenity checkbox is checked, saves id to list
   Else deletes id from list
*/
$(document).ready(function () {
  const idList = [];
  if ($('input:checkbox').is(':checked')) {
    idList.push($(':amenity_id'));
  } else {
    for (let i = idList.length - 1; i >= 0; i--) {
      if (idList[i] === $(':amenity_id')) {
        idList.splice(i, 1);
      }
    }
  }
  // Appends the list contents as list elements in amenities
  for (let i = 0; i < idList.length; i++) {
    $('#h4').find('.amenities').append('<li> + idList[i] + </li>');
  }
});

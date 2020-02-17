/* If amenity checkbox is checked, saves id to list
   Else deletes id from list
*/
$(document).ready(function () {
  let dataDict = {};
  console.log("#### SCRIPT LOADED ####");
  $('input[type="checkbox"]').on('click', function () {
    console.log("#### CLICKED ####");
    $('input[type="checkbox"]:checked').each(function () {
      dataDict[$(this).attr("data-id")] = $(this).attr("data-name");
      console.log(dataDict);
    });
  });
});

//     for (let i = idList.length - 1; i >= 0; i--) {
//       if (idList[i] === $('amenity.id')) {
//         idList.splice(i, 1);
//       }
//     }
//   });
//   // Appends the list contents as list elements in amenities
//   $('.amenities').find('h4').append(idList.join(', '));
// });


'use strict';

angular.module('angularTestApp')
  .controller('PostsCtrl', function ($scope, PostFactory) {
//     $scope.posts = [
//   {
//     "id": 0,
//     "name": "Insuresys",
//     "content": "Exercitation non tempor amet do aliqua officia aliqua anim exercitation duis nulla. Eiusmod mollit occaecat pariatur sint laborum. Sint laborum et cupidatat occaecat exercitation voluptate duis adipisicing mollit do laboris aute aute esse. Ea et laboris mollit minim deserunt do aliquip ut irure pariatur ut aliqua. Et sint in ad ut Lorem elit velit non. Eu sit irure ex sit velit cillum dolore adipisicing deserunt laboris occaecat do.",
//     "comments": [
//       {
//         "id": 0,
//         "username": "Georgette",
//         "city": "Glenshaw",
//         "content": "Deserunt cupidatat cillum do aliquip. Esse Lorem anim officia ullamco labore qui magna anim occaecat quis minim incididunt aliqua. Est laboris exercitation dolor dolor ut cillum adipisicing et aute enim sunt id. Cillum esse laborum consequat nulla. Exercitation irure incididunt deserunt voluptate anim nisi proident est ea magna quis qui eu."
//       },
//       {
//         "id": 1,
//         "username": "Foley",
//         "city": "Gambrills",
//         "content": "Elit dolore elit commodo minim exercitation ex labore sint Lorem tempor mollit deserunt cupidatat cupidatat. Ad eiusmod eu labore consequat ex reprehenderit cupidatat irure officia qui nostrud aute ex. Exercitation sint et cupidatat sunt. Velit ut deserunt labore cupidatat officia est reprehenderit nulla excepteur. Sunt Lorem nostrud sunt exercitation nulla esse quis dolor nulla commodo."
//       },
//       {
//         "id": 2,
//         "username": "Marilyn",
//         "city": "Ivanhoe",
//         "content": "Laboris pariatur nulla dolor ut. Labore amet tempor consequat elit. Incididunt incididunt qui consequat excepteur ad elit pariatur veniam exercitation magna in anim excepteur non. Mollit occaecat ea deserunt ullamco voluptate ex dolore. Exercitation proident occaecat nisi enim est esse enim qui consequat ut ipsum enim culpa."
//       },
//       {
//         "id": 3,
//         "username": "Gregory",
//         "city": "Warren",
//         "content": "Non mollit sit est eu dolor dolor cillum eu. Laborum labore consequat adipisicing culpa laboris aliquip sunt. Ex id aute eu dolore duis. Culpa laborum nulla deserunt anim incididunt Lorem laborum aliqua magna cillum dolor et consequat eiusmod. Anim mollit enim minim occaecat culpa eu anim velit mollit."
//       },
//       {
//         "id": 4,
//         "username": "Greene",
//         "city": "Slovan",
//         "content": "Duis anim et nulla in consectetur nulla labore quis consectetur dolor laboris commodo ea anim. Sit occaecat commodo minim aliqua in in nulla. Sit esse deserunt do nulla non proident aute et cillum officia pariatur. Non nostrud sint aute Lorem commodo fugiat ad. In ex tempor tempor dolore eiusmod consequat fugiat occaecat dolor magna reprehenderit."
//       },
//       {
//         "id": 5,
//         "username": "Agnes",
//         "city": "Fairlee",
//         "content": "Ex aliquip ex id incididunt cupidatat quis laborum ut. Exercitation magna qui in ut nulla nulla ad ea eiusmod ullamco amet. Duis adipisicing commodo enim consequat. Ipsum non ullamco officia elit laboris elit aliqua duis amet in commodo eiusmod mollit. Fugiat ipsum incididunt aliquip commodo laborum nostrud."
//       },
//       {
//         "id": 6,
//         "username": "Mullen",
//         "city": "Vincent",
//         "content": "Dolor labore ipsum cupidatat laboris esse ad excepteur amet proident commodo nulla dolor. Adipisicing consectetur mollit minim qui. Irure sint commodo non anim labore duis anim ut id. Deserunt sint pariatur deserunt quis sint Lorem non eiusmod. Ad in veniam tempor pariatur enim anim reprehenderit amet culpa."
//       }
//     ]
//   },
//   {
//     "id": 1,
//     "name": "Frosnex",
//     "content": "Elit dolor aliquip velit aliqua. Magna eiusmod irure velit mollit id eiusmod eu deserunt elit. Tempor proident aliqua anim mollit. Id ut ipsum magna et laboris. Nisi reprehenderit id enim amet laboris consequat ut ipsum. Incididunt et ut ad eu eiusmod nisi veniam laboris laborum laborum voluptate.",
//     "comments": [
//       {
//         "id": 0,
//         "username": "Fry",
//         "city": "Brandermill",
//         "content": "Labore voluptate Lorem qui dolore ea. Dolor occaecat amet quis sit ex sit sunt proident. Exercitation do minim esse culpa irure officia veniam laborum culpa consequat. Mollit incididunt consectetur magna velit esse officia aute quis. Ex occaecat deserunt adipisicing sunt officia fugiat nisi mollit."
//       },
//       {
//         "id": 1,
//         "username": "Patrica",
//         "city": "Irwin",
//         "content": "Ipsum pariatur incididunt nisi consectetur laborum aliqua velit ad. Voluptate voluptate laboris ea eiusmod elit laborum. Sunt laboris deserunt sit ut deserunt id labore mollit laboris ipsum reprehenderit nulla. Exercitation tempor ipsum in qui et deserunt dolor pariatur commodo in. Occaecat exercitation commodo incididunt id aute magna irure eiusmod consequat consequat dolore deserunt magna."
//       },
//       {
//         "id": 2,
//         "username": "Genevieve",
//         "city": "Bynum",
//         "content": "Id ullamco non cupidatat ullamco est ad eu minim adipisicing occaecat nisi excepteur sint elit. Adipisicing amet amet sunt nostrud aute ex anim nisi mollit ad culpa do. Eu aute ullamco aliquip aute aliqua dolor in consectetur tempor magna fugiat veniam. Ut minim culpa do fugiat aliquip eu est anim. Tempor commodo culpa eu exercitation aliquip excepteur minim adipisicing deserunt ea sint sunt irure est."
//       },
//       {
//         "id": 3,
//         "username": "Pacheco",
//         "city": "Sedley",
//         "content": "Commodo do ea quis eiusmod sint eiusmod nostrud irure Lorem fugiat do sit. Nulla laboris duis eiusmod non ipsum. Ullamco aute id elit cupidatat incididunt esse consectetur reprehenderit eiusmod consequat. Consequat culpa duis velit est minim ex tempor esse. Cupidatat velit ex eu Lorem aute est adipisicing aliquip ullamco."
//       }
//     ]
//   },
//   {
//     "id": 2,
//     "name": "Zentry",
//     "content": "Ullamco sint veniam id magna irure aliqua esse. Laboris ut eiusmod laboris incididunt pariatur qui sint consectetur aliqua ullamco. Laboris ut et eiusmod voluptate aliquip consequat aute nisi ut labore sint enim et sunt. Sint eiusmod irure sit cillum eiusmod. Velit quis velit labore laboris sint ex enim do. Amet occaecat voluptate occaecat aliqua eu exercitation id exercitation irure laborum mollit consequat Lorem esse.",
//     "comments": [
//       {
//         "id": 0,
//         "username": "Fisher",
//         "city": "Wakarusa",
//         "content": "Veniam sunt dolor ut cillum aliquip minim sint occaecat exercitation. Voluptate est dolor officia irure aliquip esse voluptate duis pariatur mollit. Exercitation consequat nostrud non ullamco deserunt cillum nulla. Consequat aliquip labore incididunt deserunt nisi exercitation exercitation proident. Qui sit nisi consectetur eu laboris elit et."
//       },
//       {
//         "id": 1,
//         "username": "Mercer",
//         "city": "Gulf",
//         "content": "Adipisicing id aliquip et et nostrud dolor ut laborum minim sint reprehenderit dolore ad. Ullamco fugiat pariatur ex aliquip. Quis dolor qui adipisicing velit irure incididunt cupidatat. Sit cupidatat elit officia eiusmod proident culpa id est Lorem enim exercitation velit. Aute amet anim labore amet magna nostrud magna ipsum enim."
//       },
//       {
//         "id": 2,
//         "username": "Gay",
//         "city": "Vowinckel",
//         "content": "Reprehenderit incididunt labore dolore pariatur voluptate duis aliqua do duis. Consectetur sit nulla eu in nisi id sint voluptate mollit. Nostrud dolore incididunt nostrud deserunt quis duis qui irure consequat proident id commodo cillum commodo. Aliquip mollit enim sit aliqua do amet dolore labore pariatur anim nulla. Anim velit ipsum elit tempor dolore ut est nulla velit exercitation voluptate."
//       },
//       {
//         "id": 3,
//         "username": "Galloway",
//         "city": "Riceville",
//         "content": "Sit ex esse esse commodo nostrud. Aliqua sit ut elit velit sit dolore labore sit nostrud adipisicing. Anim excepteur eiusmod nisi sit eu velit nostrud sunt exercitation occaecat. Consectetur commodo sint consequat magna. In cupidatat pariatur ea qui consectetur eu consequat."
//       },
//       {
//         "id": 4,
//         "username": "Browning",
//         "city": "Murillo",
//         "content": "Aliquip eu officia labore exercitation ex nisi adipisicing culpa sunt. Non ipsum ullamco ad non eu fugiat aliquip excepteur quis adipisicing. Sunt tempor exercitation enim est qui culpa mollit cupidatat. Et qui adipisicing nostrud sint duis mollit officia tempor elit. Aute consequat fugiat duis aliqua qui sit eiusmod officia."
//       }
//     ]
//   },
//   {
//     "id": 3,
//     "name": "Arctiq",
//     "content": "Ad pariatur commodo ad ad non amet qui cupidatat enim ex reprehenderit enim. Occaecat ea enim non exercitation non quis officia ea commodo ipsum laborum anim laborum Lorem. Labore proident incididunt tempor nulla quis aliqua pariatur qui. Non id magna eiusmod cupidatat id ut eu magna ipsum ad velit. Non Lorem ullamco duis adipisicing deserunt velit et excepteur nisi nisi duis dolor sit. Deserunt culpa aliquip deserunt cupidatat aliquip eu voluptate.",
//     "comments": [
//       {
//         "id": 0,
//         "username": "Abigail",
//         "city": "Chamberino",
//         "content": "Esse ea esse reprehenderit labore ullamco Lorem. Nostrud commodo ex do Lorem consequat do ipsum voluptate in magna ullamco ipsum excepteur. Duis dolore sit labore aliquip in eiusmod magna et officia do voluptate velit sit. Quis nostrud nulla laborum labore qui elit nisi tempor commodo ipsum veniam laboris. Enim exercitation duis eiusmod aliqua eu."
//       },
//       {
//         "id": 1,
//         "username": "Meredith",
//         "city": "Harleigh",
//         "content": "Esse voluptate non Lorem ut proident. Qui laborum cillum anim cillum aliquip est laboris qui sint minim voluptate exercitation sit. Culpa duis Lorem nisi enim. Ipsum culpa dolore pariatur aliqua eiusmod sint nostrud minim exercitation. Enim laborum ea sint dolore velit ea est excepteur."
//       },
//       {
//         "id": 2,
//         "username": "Jennings",
//         "city": "Holtville",
//         "content": "Nulla sint aliquip nulla laboris commodo nulla. Consectetur incididunt anim labore culpa laboris nulla tempor mollit elit irure incididunt fugiat deserunt eu. Esse minim sint pariatur sunt eu cillum esse enim adipisicing duis ex aliquip. Esse commodo sit non proident qui adipisicing in laborum. Velit Lorem ex duis magna labore dolore exercitation ipsum ea sint deserunt do enim."
//       },
//       {
//         "id": 3,
//         "username": "Pitts",
//         "city": "Hillsboro",
//         "content": "Lorem pariatur eu ut dolore. Nulla ut dolore reprehenderit proident culpa mollit deserunt. Laborum aliquip enim nisi sit nulla mollit esse nulla laborum in cupidatat exercitation incididunt sit. Reprehenderit nulla in exercitation minim aute deserunt. Commodo et labore minim ullamco adipisicing Lorem cupidatat deserunt do voluptate."
//       },
//       {
//         "id": 4,
//         "username": "Huber",
//         "city": "Oasis",
//         "content": "Fugiat eu nostrud adipisicing nulla proident dolore ea occaecat veniam exercitation. Esse velit magna exercitation cupidatat velit excepteur in. Labore anim eiusmod sint tempor ipsum Lorem adipisicing ea reprehenderit incididunt ex non magna quis. Qui adipisicing excepteur occaecat aute voluptate nisi ullamco sunt quis. Magna minim ipsum Lorem sint."
//       },
//       {
//         "id": 5,
//         "username": "Carmen",
//         "city": "Imperial",
//         "content": "Et voluptate et id occaecat et consectetur amet qui enim. Do aute nisi ea occaecat enim occaecat elit est. Ut nulla veniam ut enim ullamco et esse ut dolore nisi. Id et aliqua laboris consequat enim minim excepteur. Sit occaecat culpa aute aliquip veniam aliqua fugiat laboris eiusmod nostrud."
//       }
//     ]
//   },
//   {
//     "id": 4,
//     "name": "Jasper",
//     "content": "Ex nulla voluptate incididunt amet aliquip exercitation laborum cillum dolore aliqua veniam voluptate laboris. Sint Lorem nostrud ut ut incididunt dolore do mollit nulla duis. Do eu dolor mollit laboris dolor ex sunt fugiat mollit exercitation nisi nulla id. Lorem magna fugiat aute esse ea et pariatur laboris tempor do labore. Sint do quis tempor minim irure cupidatat reprehenderit. Commodo consequat deserunt est duis proident sit voluptate cupidatat ea.",
//     "comments": [
//       {
//         "id": 0,
//         "username": "Candice",
//         "city": "Garfield",
//         "content": "Dolore non amet consectetur eu. Officia ullamco Lorem culpa commodo officia ipsum laborum consequat eiusmod incididunt. Velit reprehenderit eiusmod amet cillum ad ullamco culpa quis pariatur consequat pariatur cillum. Duis Lorem aliqua velit ad nulla excepteur ut proident sit mollit. Eiusmod excepteur cupidatat fugiat consequat proident velit dolor."
//       },
//       {
//         "id": 1,
//         "username": "Hunter",
//         "city": "Cartwright",
//         "content": "Labore adipisicing quis esse adipisicing irure elit minim anim dolor qui eiusmod. Esse veniam laboris tempor et esse deserunt elit nulla. Culpa reprehenderit nisi ea in proident amet incididunt veniam ipsum deserunt adipisicing ea est. Dolore deserunt dolore enim aliquip commodo. Proident sunt eu culpa culpa veniam."
//       },
//       {
//         "id": 2,
//         "username": "Aisha",
//         "city": "Austinburg",
//         "content": "Deserunt pariatur do velit nulla sunt dolore. Nostrud nulla dolore et exercitation. Lorem ut nulla anim esse laborum magna pariatur sit minim dolore exercitation veniam culpa veniam. Ullamco ullamco ullamco esse do enim ut aute esse dolor ut nostrud irure nulla. Anim anim proident nisi magna sint velit officia."
//       },
//       {
//         "id": 3,
//         "username": "Crosby",
//         "city": "Johnsonburg",
//         "content": "Quis ullamco sit labore ut culpa cillum incididunt elit ullamco veniam Lorem ut. Reprehenderit excepteur exercitation dolore adipisicing nostrud mollit minim aute. Cillum labore do labore cillum cupidatat ex id cupidatat veniam ullamco esse veniam sit ea. Excepteur velit Lorem exercitation magna laboris est irure Lorem nostrud ea exercitation dolor id culpa. Deserunt irure voluptate est officia aliqua Lorem aliqua id."
//       },
//       {
//         "id": 4,
//         "username": "Velasquez",
//         "city": "Blende",
//         "content": "Commodo et excepteur velit non ea commodo. Qui deserunt voluptate cillum nostrud labore non pariatur aute pariatur. Esse excepteur velit id quis elit. Quis ipsum enim fugiat aliquip non minim dolore sunt. Veniam quis consequat est tempor adipisicing sit pariatur ut ea in."
//       },
//       {
//         "id": 5,
//         "username": "Yates",
//         "city": "Westboro",
//         "content": "Dolor eu cillum aliquip aute reprehenderit incididunt duis fugiat. Cillum est consequat laborum commodo sint excepteur cupidatat dolor officia mollit aliqua velit. Amet sunt aute duis do commodo mollit ullamco commodo magna. Ullamco et reprehenderit duis aliqua minim. Nostrud velit ad ut nulla ipsum."
//       }
//     ]
//   }
// ];Good Version without Service
    $scope.posts = PostFactory.getPosts();


});

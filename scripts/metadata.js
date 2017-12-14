define(function(){
    return {
        pageGroups: [{"id":"8a3d00db-9a83-b589-786e-5d2b9377ebc4","name":"Default group","pages":[{"id":"d8545d48-ed72-d6af-09be-b11f34ce9f30","name":"Login"},{"id":"11f75eda-7903-3e89-c032-d72bddab44cb","name":"Charges"},{"id":"a187398f-6d0f-88e1-b73e-4810db71b368","name":"User-Groupes"},{"id":"db0516ee-c081-a3f4-71cf-6604740f60ad","name":"Consommation"},{"id":"8bbf648b-6088-2270-7425-7931a8a50e34","name":"Programmation"},{"id":"913eb343-2619-2673-3283-c60940421bd7","name":"Interrupteurs"},{"id":"ad191936-f0e4-039e-3b2a-12d223eb2d67","name":"Catégorie"},{"id":"bdcea178-eac7-d506-38ac-bc7692c4be84","name":"Admin-Utilisateurs"},{"id":"a5956846-e711-4df9-c8ad-98048354649f","name":"Admin-Interrupteurs"},{"id":"11412d5d-44d5-8b25-95ae-be2afc563500","name":"Admin-Charges"},{"id":"6e9a7976-7b03-eb36-b397-37be824772bb","name":"Admin-Consommation"},{"id":"19f4d4be-a8b5-7542-d2a8-f62a6572c628","name":"Admin-Catégorie"},{"id":"3fafa94c-d7ee-3ff1-6310-bf66a4c0c9b8","name":"Admin-Groupes"},{"id":"21f4b651-992e-e714-bd61-6a8e0219d352","name":"Admin-Programmation"},{"id":"cb6848f5-43a2-4160-bff2-5534d2dd1de4","name":"AM-Charges"},{"id":"9acc67e6-cabb-cc35-7c0d-f0e4528c7b94","name":"AM-Interrupteurs"},{"id":"7a4532b7-2890-d77e-56b7-a571f6117990","name":"Admin-AjoutUtilisateur"},{"id":"c72559d0-ad79-21ea-44f9-3a7955f17938","name":"AM-Consommation"}]}],
        downloadLink: "//services.ninjamock.com/html/htmlExport/download?shareCode=K9G3XWx&projectName=Captain Project",
        startupPageId: 0,

        forEachPage: function(func, thisArg){
        	for (var i = 0, l = this.pageGroups.length; i < l; ++i){
                var group = this.pageGroups[i];
                for (var j = 0, k = group.pages.length; j < k; ++j){
                    var page = group.pages[j];
                    if (func.call(thisArg, page) === false){
                    	return;
                    }
                }
            }
        },
        findPageById: function(pageId){
        	var result;
        	this.forEachPage(function(page){
        		if (page.id === pageId){
        			result = page;
        			return false;
        		}
        	});
        	return result;
        }
    }
});

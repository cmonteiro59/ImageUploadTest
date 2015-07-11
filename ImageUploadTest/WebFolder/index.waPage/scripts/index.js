
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var productEvent = {};	// @dataSource
// @endregion// @endlock
var dataInit = false; 
// eventHandlers// @lock

	productEvent.onCollectionChange = function productEvent_onCollectionChange (event)// @startlock
	{// @endlock
		if(dataInit == false)
		{
			sources.product.addNewElement();
			
		}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("product", "onCollectionChange", productEvent.onCollectionChange, "WAF");
// @endregion
};// @endlock

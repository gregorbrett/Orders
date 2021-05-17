sap.ui.define(["com/gb/Orders/controller/BaseController",
    "sap/ui/model/json/JSONModel"],
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.gb.Orders.controller.MainView", {

            onInit: function (evt) {
                console.log("setting model");
                var orders = {
                    "Orders": [
                        { "order": "12234234" },
                        { "order": "13432452" },
                        { "order": "16392452" },
                        { "order": "14344232" },
                        { "order": "12342452" },
                        { "order": "13674552" },
                        { "order": "11143452" }]
                };
                var oModel = new JSONModel(orders);
                this.getView().setModel(oModel);
            }

        });
    });

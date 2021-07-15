// The intial exported data
// Do not rename any of the Keys only change the values,
// You can add any custom keys you want the framework ignores these
// They will get loaded into a variable called currentMapData when your script gets loaded
// You can self reference your own data/custom keys through this if you wanted
mapData = {

    // Map you want this map to override, ex. de_mirage de_dust2 cs_office
    overriddenMapName: "",

    // Your custom map name, can be anything you want its just used for logging
    mapName: "",

    // This is optional it gets called before your maps materials are created
    // can use it to say change weather 
    onLoad: function () {

    },

    // Same as onLoad only this gets called before your materials are destroyed
    // or if your map is unloaded with script use this to clean up anything you changed
    onUnload: function () {

    },

    // Optional also called on draw can do any rendering functions or update/change materials
    // return true from this function to force a material reload if you are dynamically changing them
    onDraw: function() {

    },

    // this is where you will define the materials you override and how to do it
    materialOverrides: {
        // Example material overrides



        // Overriding like this calls CreateProxy and RefreshProxy
        // the Key name should be the name of the material you want to override
        // the value is an object containing proxies to override
        // the Key name for the proxies should be the proxy you want to change without the $ i insert that in the framework
        // basetexture bumpscale envmap etc.
        // value is what you want to override it with and empty string basically overrides the original parameter to nothing
        /* 

        "de_dust/hr_dust/hr_dust_blend_asphalt_07": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_color",
            basetexture2: "de_aztec/hr_aztec/hr_aztec_ground_grass_01_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_normal",
            envmap: "environment maps/metal_generic_003",
            detail: "detail/dt_stone1",
            envmapsaturation: "",
            bumpscale: "",
            detailblendfactor: "",
            detailscale: "[ 8 8 ]",
            normalmapalphaenvmapmask: "",
            envmaptint: "[0.03 0.03 0.03]",
        },

        */

        // or alternatively if you dont want to do a proxy and just want to replace
        // you can just do this doing it this way calls Replace

        /* 

        "de_dust/hr_dust/hr_dust_blend_asphalt_07": {
            replace: "de_aztec/hr_aztec/hr_aztec_wall_stone_05_grey",
        }, 

        */

    }
}

// finally we export the mapData
exports.mapData = mapData;
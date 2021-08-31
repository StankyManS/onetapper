function assign(object, source) {
    Object.keys(source).forEach(function (key) {
        object[key] = source[key];
    });
}

exports.mapData = {
    overriddenMapName: "de_dust2",
    mapName: "Dustec",


    onLoad: function () {
        //Cheat.Print("Miraztec onInit called \n")

        var material_paver_grass_blend = {
            basetexture: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_color",
            basetexture2: "de_aztec/hr_aztec/hr_aztec_ground_grass_01_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_normal",
            bumpmap2: "de_aztec/hr_aztec/hr_aztec_ground_grass_01_normal",
            envmap: "environment maps/metal_generic_003",
            envmaptint: "[0.03 0.03 0.03]",
        };
        var material_grass_paver_blend = {
            basetexture: "de_aztec/hr_aztec/hr_aztec_ground_grass_01_color",
            basetexture2: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_normal",
            bumpmap2: "de_aztec/hr_aztec/hr_aztec_ground_grass_01_normal",
            envmap: "environment maps/metal_generic_003",
            envmaptint: "[0.03 0.03 0.03]",
        }
        var material_moss_stone_grass_blend = {
            basetexture: "de_aztec/hr_aztec/hr_aztec_ground_grass_01_color",
            basetexture2: "de_aztec/hr_aztec/hr_aztec_ground_rock_01_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_grass_01_normal",
            bumpmap2: "de_aztec/hr_aztec/hr_aztec_ground_rock_01_normal",
        };
        var material_moss_stone_grass_blend_inverse = {
            basetexture:  "de_aztec/hr_aztec/hr_aztec_ground_rock_01_color",
            basetexture2:  "de_aztec/hr_aztec/hr_aztec_ground_grass_01_color",
            bumpmap:"de_aztec/hr_aztec/hr_aztec_ground_rock_01_normal",
            bumpmap2: "de_aztec/hr_aztec/hr_aztec_ground_grass_01_normal",
        };

        var batch_replace_list = {

            // various roads/paths across map
            "de_dust/hr_dust/hr_dust_blend_asphalt_07": material_paver_grass_blend,
            "de_dust/hr_dust/hr_dust_blend_asphalt_06": material_paver_grass_blend,
            "de_dust/hr_dust/hr_dust_blend_floortile_01": material_paver_grass_blend,
            "de_dust/hr_dust/hr_dust_sand_02": material_paver_grass_blend,

            "de_dust/hr_dust/hr_dust_brick_ground_02": material_moss_stone_grass_blend_inverse,

            // small strip in mid 
            "de_dust/hr_dust/hr_dust_blend_sand02_sand03": material_moss_stone_grass_blend,

            // ground between ct spawn and b and some of B site ground
            "de_dust/hr_dust/hr_dust_blend_groundstone01-groundsmooth01": material_moss_stone_grass_blend,
            "de_dust/hr_dust/hr_dust_blend_groundrough01-groundsmooth01": material_moss_stone_grass_blend,
            "de_dust/hr_dust/hr_dust_blend_groundrough02-groundsmooth01":  material_moss_stone_grass_blend,

            "de_dust/hr_dust/hr_dust_blend_groundrough01-groundrough02":  material_moss_stone_grass_blend_inverse,


        };




        for (material in batch_replace_list) {
            this.materialOverrides[material] = {};
            assign(this.materialOverrides[material], batch_replace_list[material]);
        }
    },
    onUnload: function () {
        //Cheat.Print("`Miraztec onUnload called \n")

    },

    materialOverrides: {
        /* "$baseTexture" 			"de_aztec/hr_aztec/hr_aztec_ground_paver_01_color"
        "$bumpmap" 				"de_aztec/hr_aztec/hr_aztec_ground_paver_01_normal"
         "$baseTexture2" 		"de_aztec/hr_aztec/hr_aztec_ground_grass_01_color"
        "$bumpmap2" 			"de_aztec/hr_aztec/hr_aztec_ground_grass_01_normal" */
        //"de_aztec/hr_aztec/hr_aztec_blend_groundgrass01-groundrock01"
        //"de_aztec/hr_aztec/hr_aztec_blend_wall_stone_04_moss-plaster"
        // "de_aztec/hr_aztec/hr_aztec_blend_wall_stone_01_moss-plaster"
        //"maps/de_ancient/de_aztec/hr_aztec/hr_aztec_blend_paver2-dirt4_-1797_-340_113"
        //models/props/de_aztec/hr_aztec/aztec_walls/aztec_wall_05_includes_blue_color.vtf
        // de_aztec/carving01_cheap


        "de_dust/hr_dust/hr_dust_blend_floortile_03": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_ground_carvings_01_color",
            basetexture2: "de_aztec/hr_aztec/hr_aztec_ground_grass_01_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_carvings_01_normal",
            bumpmap2: "de_aztec/hr_aztec/hr_aztec_ground_grass_01_normal",
            envmap: "environment maps/metal_generic_003",
            envmaptint: "[0.03 0.03 0.03]",
        }
    }
}
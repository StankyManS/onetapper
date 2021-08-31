function assign(object, source) {
    Object.keys(source).forEach(function (key) {
        object[key] = source[key];
    });
}

mapData = {

    overriddenMapName: "cs_office",
    mapName: "Officetec", // XD

    onLoad: function () {

        // To prevent repeatedly writing the same thing and c+p we pre define a set of objects to all be replaced with same thing
        // using the assign function i copy pasted from the internet :^) 
        // you could also do this in the global space but i chose to do it here as its partially its purpose
        // it still ends up being somewhat annoying to type but less so than typing every property or pasting them
        // especially with objects with a lot of them
        // just make sure the resulting objects get properly mapped to materialOverrides
        // im also swapping casing here for self clarity that its meant for override
        // names are insanely verbose anyways for clarity
        // some of the things are commented as to what they are some arent

        // Mainly mossy with grey highlight bricks used on walls across A site mostly and some of the map trimming
        var material_moss_grey_brick_blend = {
            basetexture: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_moss_color",
            basetexture2: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_grey_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_grey_normal",
            bumpmap2: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_grey_normal",
        };

        // Almost the same as above only with basetexture and basetexture2 swapped as some places look better like this
        var material_grey_moss_brick_blend = {
            basetexture: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_grey_color",
            basetexture2: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_moss_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_grey_normal",
            bumpmap2: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_grey_normal",
        };

        var material_moss_brick_blend = {
            basetexture: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_moss_color",
            basetexture2: "",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_grey_normal",
            bumpmap2: "",
        };

        var material_moss_brick = {
            basetexture: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_moss_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_grey_normal",
        };

        // Fully grey large bricks
        var material_grey_brick_blend = {
            basetexture: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_grey_color",
            basetexture2: "",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_grey_normal",
            bumpmap2: "",
        };

        // smaller grey bricks im using in place of a lot of plaster mixed with moss brick
        var material_grey_small_brick_moss_brick_blend = {
            basetexture: "de_aztec/hr_aztec/hr_aztec_wall_stone_05_grey_color",
            basetexture2: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_moss_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_wall_stone_05_normal",
            bumpmap2: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_grey_normal",
        }

        // inverse of above 
        var material_moss_brick_grey_small_brick_blend = {
            basetexture: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_moss_color",
            basetexture2: "de_aztec/hr_aztec/hr_aztec_wall_stone_05_grey_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_grey_normal",
            bumpmap2: "de_aztec/hr_aztec/hr_aztec_wall_stone_05_normal",
        }

        // Only small grey bricks
        var material_grey_small_brick = {
            basetexture: "de_aztec/hr_aztec/hr_aztec_wall_stone_05_grey_color",
            basetexture2: "",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_wall_stone_05_normal",
            bumpmap2: "",
        }

        // nice looking ground material paving
        var material_ground_paver = {
            basetexture: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_normal",
        }

        // mossy wood texture 
        var material_mossy_wood = {
            basetexture: "models/props/de_aztec/aztec_rope_bridge"
        }

        var material_concrete_ground_blend = {
            baseTexture: "nature/swamp_roots01_green",
            //bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_dirt_01_normal",

        }
        //models\props\de_aztec\hr_aztec\aztec_trims\aztec_wall_04_trims_01_blue_color

        var material_orange_brick = {
            basetexture: "hr_massive/town_plaster_2",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_grey_normal",
            //basetexturetransform: "center .5 .5 scale 1 .5 rotate 0 translate 0 0",
            /* envmap: "environment maps/metal_generic_001",
            envmaptint: "[0.06 0.06 0.06]", */
        }

        // carving texture
        var material_carvings = {
            basetexture: "de_aztec/hr_aztec/hr_aztec_ground_carvings_01_color",
            basetexture2: "",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_carvings_01_normal",
        }

        var material_white_brick = {
            basetexture: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_white_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_grey_normal",
        }

        // things to simply make invisible
        var remove_me = { alpha: "0", translucent: "1", color: "{0 0 0}", vertexalpha: "0", envmap: "", };

        // yeah
        var batch_replace_list = {


            "brick/brickwall_snow01": material_grey_small_brick,

            // top wall trimming
            "building_template/building_trainstation_template002j": material_grey_small_brick,
            "building_template/building_trainstation_template002k": material_carvings,


            // large part of the taller building walls 
            "concrete/cinderwall03b_cheap": material_moss_brick,
            "concrete/cinderwall03c_cheap": material_moss_brick,
            "cs_italy/hpe_plaster_blue_wall": material_carvings,
            "buildings/glass01_small": material_carvings,
            "concrete/offflrasnow": material_grey_small_brick,

            //Ct spawn ground
            "concrete/blend_blacktop_01": material_ground_paver,

            // some stuff in main halls
            "plaster/urban_plasterwall_03a_burned": material_carvings,

            // inside floors 
            "buildings/carpet001": material_carvings,


            // countertops in the one open area
            "tile/urban_countertop01b": material_carvings,
            "wood/wood_int_09": material_mossy_wood,

            // inside walls trimming 
            "de_nuke/nuke_walloffice_01_wood": material_carvings,

            // large stairway
            "concrete/concretefloor011a": material_ground_paver,

            // elevator door
            "cs_office/cs_elevator_wall_and_door": material_carvings,

            // some random door by large stairs
            "models/props_doors/offdra": material_carvings,
            "metal/drtrime": material_carvings,
            "models/props_doors/door_keycard_scan_doorknob": remove_me,


            "metal/prodibeama": material_carvings,

            // some inside lights 
            "models/props_interiors/sconce02a": material_carvings,

            // fire extinguisher lmfao
            "models/props/cs_office/fire_extinguisher": material_carvings,
            "signs/fireextinguisher01": remove_me,

            // some other inside ceiling trimming
            "plaster/plasterceiling_int_01": material_carvings,

            // large open room walls
            "plaster/urban_plasterwall_05a_nobump": material_grey_brick_blend,

            // cant seem to hide the paintings so just make them carvings XD
            "models/props_interiors/painting_landscape_e": material_carvings,
            "models/props_interiors/painting_landscape_a": material_carvings,
            "models/props_interiors/painting_landscape_b": material_carvings,
            "models/props_interiors/painting_landscape_d": material_carvings,
            "models/props_interiors/painting_portrait_a": material_carvings,
            "models/props/cs_office/offpaintinga": material_carvings,
            "models/props/cs_office/offpaintingo": material_carvings,

            // some stuff around to make carvings cuz idfk what else to do with it
            "models/props/cs_office/light_ceiling": material_carvings,
            "models/props/cs_office/light_ceiling_off": material_carvings,
            "models/props_urban/exit_sign001": material_carvings,
            "models/props_urban/emergency_light001": material_carvings,

            // stuff to removr
            "decals/decalpapers03": remove_me,
            "decals/snow01": remove_me,
            "models/props_vents/borealis_vent001": remove_me,
            "glass/offlightcover_off": remove_me,
            "glass/offlightcover": remove_me,
            "models/props_urban/hotel_ceiling_firealarm001": remove_me,

        };

        for (material in batch_replace_list) {
            this.materialOverrides[material] = {};
            assign(this.materialOverrides[material], batch_replace_list[material]);
        }
    },
    onUnload: function () {
        // Cheat.Print("`Miraztec onUnload called \n")

    },
    /* 
        // decent looking ground
        "baseTexture" 			"de_aztec/hr_aztec/hr_aztec_ground_dirt_01_color"
        "bumpmap" 				"de_aztec/hr_aztec/hr_aztec_ground_dirt_01_normal"
    
        // plaster that looks good with $color
        "basetexture" "hr_massive\plaster_1"
        "bumpmap" "hr_massive\plaster_1_normal" 
        "color"                  	"{110 130 138}"
    
        // square tile ground paver
        "$baseTexture" 			"de_aztec/hr_aztec/hr_aztec_ground_paver_02_color"
        "$bumpmap" 				"de_aztec/hr_aztec/hr_aztec_ground_paver_02_normal"

        // grey plaster
        "$baseTexture2" 		"de_aztec/hr_aztec/hr_aztec_wall_plaster_01_bottom_color"
        "$bumpmap2" 			"de_aztec/hr_aztec/hr_aztec_wall_plaster_01_normal"


     */

    materialOverrides: {


        // large part of inside carpet 
        "buildings/carpet002": {
            baseTexture: "de_aztec/hr_aztec/hr_aztec_ground_paver_02_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_paver_02_normal",
            surfaceprop: "rock",
            color: "{255 200 200}"
        },

        "carpet/carpet03": {
            baseTexture: "de_aztec/hr_aztec/hr_aztec_ground_paver_02_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_paver_02_normal",
            surfaceprop: "rock",
            basetexturetransform: "center .5 .5 scale .5 .5 rotate 0 translate 0 0",
            color: "{255 200 200}"
        },
        // kitchen tile
        "tile/urban_tilefloor02a": {
            baseTexture: "de_aztec/hr_aztec/hr_aztec_ground_paver_02_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_paver_02_normal",
            surfaceprop: "rock"
        },

        "tile/urban_tilefloor01b": {
            baseTexture: "de_aztec/hr_aztec/hr_aztec_ground_paver_02_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_paver_02_normal",
            envmap: "",
            surfaceprop: "rock",
            color: "{255 200 200}"
        },

        // windows around
        "glass/glasswindow010b": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_ground_carvings_01_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_carvings_01_normal",
            envmaptint: "[0.03 0.03 0.03]",
        },

        // lots of the snow around the map
        "ground/snow01": {
            baseTexture: "nature/swamp_roots01_green",
            //bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_dirt_01_normal",
        },

        // ground in courtyard by idk window thing
        "ground/blendsnow_conc": {
            baseTexture: "nature/swamp_roots01_green",
            basetexture2:"de_aztec/hr_aztec/hr_aztec_ground_paver_01_color",
            bumpmap2: "de_aztec/hr_aztec/hr_aztec_ground_dirt_01_normal",
        },
        "ground/blendsnow_blacktop": {
            baseTexture: "nature/swamp_roots01_green",
            basetexture2:"de_aztec/hr_aztec/hr_aztec_ground_paver_01_color",
            bumpmap2: "de_aztec/hr_aztec/hr_aztec_ground_dirt_01_normal",
        },

        // ct spawn walls 
        "brick/offwlld": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_grey_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_grey_normal",
        },
        "de_train/train_brick_wall_04_bump": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_grey_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_grey_normal",
        },
        "de_train/train_brick_wall_01_bump": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_grey_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_grey_normal",
        },

        // the awnings are literally 1 texture, not much i can do with them :(
        "models/props/cs_office/awning_long": {
            basetexture: "models/props/de_aztec/aztec_rope_bridge",
            envmap: "",
        },

        // large metal doors/big slidy boy
        "de_nuke/nuke_metaldoor_01": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_ground_carvings_01_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_carvings_01_normal",
            envmaptint: "[0.06 0.06 0.06]",
        },
        //"de_aztec/hr_aztec/hr_aztec_blend_wall_stone_04_white-plaster"
        //"building_template/building_trainstation_template002k": material_orange_brick,
        // bottoms of brick walls in courtyard with snow blend
        "brick/brickwall_snow01b": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_moss_color",
            basetexture2: "de_aztec/hr_aztec/hr_aztec_wall_stone_05_grey_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_grey_normal",
            bumpmap2: "de_aztec/hr_aztec/hr_aztec_wall_stone_05_normal",
        },

        // other set of bottoms but i need to clear the envmap its insane
        "brick/offwll_snow": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_wall_stone_05_grey_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_wall_stone_05_normal",
            envmap: ""
        },

        // main hall walls 
        "plaster/urban_plasterwall_05a": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_grey_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_grey_normal",
            envmap: "environment maps/metal_generic_001",
            envmaptint: "[0.005 0.005 0.005]",
        },
        /* "plaster/urban_plasterwall_05a_nobump": {
            basetexture: "stone/wall_house01",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_wall_stone_01_grey_normal",
            basetexturetransform: "center 0 0 scale 2 2 rotate 0 translate 0 0"
        }, */
        "plaster/plaster_int_15b": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_ground_carvings_01_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_carvings_01_normal",
            /* envmap: "environment maps/metal_generic_001",
            envmaptint: "[0.01 0.01 0.01]",
            ssbump: "1", */
        },
        // some floor stuff 

        // inside ceilings
        "tile/ceilingtilea": {
            baseTexture: "de_aztec/hr_aztec/hr_aztec_ground_paver_02_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_paver_02_normal",
            envmap: "",
            surfaceprop: "rock",
        },

        // outside crates 
        "models/props/crates/wcrate_64x64_snow": {
            basetexture: "models/props/crates/wcrate_64x64_moss"
        },

        // some other walls
        //de_aztec\hr_aztec\hr_aztec_wall_plaster_02_color
        /*  "plaster/plaster_int_15b": {
             basetexture: "de_aztec/hr_aztec/hr_aztec_wall_plaster_02_color",
             bumpmap: "de_aztec/hr_aztec/hr_aztec_wall_plaster_02_normal",
             color: "{155 200 155}"
         } */
    }
}




exports.mapData = mapData;
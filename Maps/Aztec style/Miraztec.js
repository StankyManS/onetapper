function assign(object, source) {
    Object.keys(source).forEach(function (key) {
        object[key] = source[key];
    });
}

mapData = {

    overriddenMapName: "de_mirage",
    mapName: "Miraztec",

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

        // carving texture
        var material_carvings = {
            basetexture: "de_aztec/hr_aztec/hr_aztec_ground_carvings_01_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_carvings_01_normal",
        }
        // things to simply make invisible
        var remove_me = { alpha: "0", translucent: "1" };

        // yeah
        var batch_replace_list = {
            // walls around the map (mostly A site) and some trimming
            "maps/de_mirage/de_mirage/brick/de_mirage_brick_ver2_blend_update_wvt_patch": material_moss_grey_brick_blend,
            "de_mirage/hr_mirage/mirage_plaster_blend_3": material_moss_grey_brick_blend,
            "de_mirage/hr_mirage/mirage_plaster_1": material_moss_grey_brick_blend,
            "de_mirage/brick/de_mirage_brick_ver1_blend": material_moss_grey_brick_blend,
            "overlays/shacks_beverage": material_moss_grey_brick_blend,
            "de_mirage/base/de_mirage_base_ver1_blend": material_moss_grey_brick_blend,

            "de_mirage/brick/de_mirage_brick_ver2_blend2_diffuse": material_grey_moss_brick_blend,
            "de_mirage/brick/de_mirage_brick_ver1_diffuse": material_grey_moss_brick_blend,
            "de_mirage/plaster/de_mirage_plaster_salmon1_diffuse": material_grey_moss_brick_blend,

            // inverse mossy grey texture walls
            "de_mirage/plaster/de_mirage_plaster_salmon1_blend": material_grey_moss_brick_blend,
            "de_mirage/brick/de_mirage_brick_ver2_blend_update": material_moss_brick_blend,

            // only grey bricks
            "brick/brick_ext_04": material_grey_moss_brick_blend,

            "de_dust/sitebwall07a": material_grey_small_brick,
            
            // mossy bricks blending with smaller grey ones 
            "de_mirage/brick/de_mirage_brick_ver1pl_blend_diffuse": material_moss_brick_grey_small_brick_blend,
            "de_mirage/base/de_mirage_top_ver1_blend": material_moss_brick_grey_small_brick_blend,
            "de_mirage/base/de_mirage_mid_ver1_diffuse": material_moss_brick_grey_small_brick_blend,

            // only small grey bricks around window/mid/apts
            "de_mirage/base/de_mirage_top_ver1_diffuse": material_grey_small_brick,
            "brick/brick_ext_04": material_grey_small_brick,
            "de_mirage/plaster/de_mirage_plaster_blue1_blend": material_grey_small_brick,
            "de_mirage/plaster/de_mirage_plaster_blue1_diffuse": material_grey_small_brick,
            "tile/tilewall009b": material_grey_small_brick,


            //palace walls
            "cs_italy/hpe_plaster_trim_light": material_grey_small_brick,
            "cs_italy/hpe_plaster_tan_wall": material_grey_small_brick,

            // apartments walls
            "cs_italy/hpe_plaster_yellow_wall": material_grey_small_brick,

            // a lot of the paved areas ground
            "concrete/concrete_floor_04": material_ground_paver,
            "models/props_urban/curbs001": material_ground_paver,
            "models/props/de_mirage/brush_shapes/residwall04a": material_ground_paver,
            "models/props_urban/stoop002": material_ground_paver,


            // b site broken wall
            "models/props/de_mirage/broken_wall_1/broken_wall_1": material_ground_paver,

            // underpass entrance arch
            "models/props/cs_italy/brick_arch01": material_ground_paver,

            // underpass walls
            "de_dust/marketwall05a": material_ground_paver,
            "de_dust/marketwall02": material_ground_paver,

            // lots of wood things around the map like palace exit and A site boxes
            "wood/milbeams003": material_mossy_wood,
            "models/props/de_mirage/wood_roof_plank/wood_ver3_diffuse": material_mossy_wood,
            "wood/woodbeam001a": material_mossy_wood,
            "de_mirage/wood/de_mirage_wood_ver3_diffuse": material_mossy_wood,
            "models/props/de_dust/hr_dust/dust_crates/dust_shipping_crate_02_wood_color": material_mossy_wood,
            "wood/woodfloor005a": material_mossy_wood,
            "wood/wood_int_02": material_mossy_wood,
            "wood/milcab001": material_mossy_wood,
            "wood/plywood02": material_mossy_wood,
            "wood/woodfloor005a": material_mossy_wood,

            // window arches in aps looking into b
            "models/de_dust/windows/window_6x10_arch": material_ground_paver,

            // various windows
            "models/de_dust/windows/window_4x6_arch": material_ground_paver,
            "models/de_dust/windows/window_4x8_arch_flat": material_ground_paver,
            "models/de_dust/windows/window_6x10_arch_flat": material_ground_paver,
            "models/de_dust/windows/window_4x8_square": material_ground_paver,

            // some stuff around A
            "de_mirage/doors/door_c": material_carvings,


            // things to remove 

            // sand decals -> not sand decals idk'
            "decals/sanddecal01": remove_me,
            "decals/sanddecal02": remove_me,

            // remove trash CHANGEME replaace it with something better
            "decals/trashdecal01a": remove_me,
            "decals/trashdecal04a": remove_me,
            "decals/dust_poster3": remove_me,
            "models/props_junk/garbage001a_01": remove_me,
            "decals/offpapers03": remove_me,
            "decals/trashdecal03a": remove_me,
            "decals/trashdecal02a": remove_me,
            "decals/trashdecal05a": remove_me,
            "decals/trash_00": remove_me,
            "overlays/trash_01": remove_me,
            "decals/dust_poster5": remove_me,
            "models/props/de_prodigy/prodwlla": remove_me,
            "models/props_junk/food_used": remove_me,

            // why wont this remove?
            "models/props_junk/physics_trash_hospital": remove_me,

            // brick decay decals
            "decals/hpe_plaster_decal_decay_brick_03": remove_me,
            "decals/hpe_plaster_decal_decay_04": remove_me,
            "decals/infwalldetail09": remove_me,
            "decals/plaster013a": remove_me,
            "decals/plaster017a": remove_me,
            "de_mirage/decals/wall_worna_decal": remove_me,
            "decals/hpe_plaster_decal_decay_brick_04": remove_me,
            "decals/hpe_plaster_decal_decay_brick_06": remove_me,
            "decals/infwalldetail10": remove_me,
            "decals/decalstain001a": remove_me,

            // some posters
            "de_mirage/decals/poster_a_decal": remove_me,
            "de_mirage/decals/poster_b_decal": remove_me,

            // electronics by underpass
            "models/props/cs_assault/wall_wires1": remove_me,
            "models/props/props_utilities/electric_cables01": remove_me,

            // various electronics
            "models/props_urban/airconditioner001": remove_me,

            "models/effects/urban_puddle01a": remove_me,
            "models/props_debris/composite_debris2": remove_me,
            "models/props_junk/plasticcrate01a": remove_me,

            // paint decals
            "overlays/urban_paintswatch_01a": remove_me,
            "overlays/urban_paintswatch_02a": remove_me,
            "overlays/urban_paintswatch_03a": remove_me,
            "overlays/urban_paintswatch_04a": remove_me,

            // sign on cat
            "models/props/de_dust/sign_street01": remove_me,
        };

        for (material in batch_replace_list) {
            this.materialOverrides[material] = {};
            assign(this.materialOverrides[material], batch_replace_list[material]);
        }
    },
    onUnload: function () {
        // Cheat.Print("`Miraztec onUnload called \n")

    },


    materialOverrides: {

        // A site ground 
        "de_mirage/marble/marble_01": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_ground_rock_01_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_rock_01_normal",
            envmap: "environment maps/metal_generic_001",
            normalmapalphaenvmapmask: "",
            envmaptint: "[0.1 0.1 0.1]",
            //envmapmask: "models/effects/cube_white",
        },

        // a site slight incline 
        "de_mirage/tile/de_mirage_tile_ver4_diffuse": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_normal",
            envmap: "environment maps/metal_generic_003",
            detail: "detail/dt_stone1",
            envmapsaturation: ".1",
            bumpscale: "0.0",
            detailblendfactor: "0.5",
            detailscale: "[ 8 8 ]",
            normalmapalphaenvmapmask: "",
            envmaptint: "[0.03 0.03 0.03]",
            //envmapmask: "models/effects/cube_white",
        },

        // stone blocks on A site
        "models/de_dust/objects/stoneblocks01": { basetexture: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_color" },

        // i have no idea what this is 
        "concrete/concrete_ext_07": { replace: "de_aztec/hr_aztec/hr_aztec_wall_stone_05_grey" },
        "concrete/concrete_floor_04": { basetexture: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_color" },

        // A site door outline -> carved rock
        "models/props/de_mirage/large_door_b/large_door_b": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_ground_carvings_01_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_carvings_01_normal",
            envmap: "environment maps/metal_generic_001",
            envmaptint: "[0.3 0.3 0.3]",
        },
        "models/props/de_mirage/wall_arch_a/wall_arch_a1": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_ground_carvings_01_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_carvings_01_normal",
            envmap: "environment maps/metal_generic_001",
            envmaptint: "[0.3 0.3 0.3]",
        },

        //ticket booth
        "wood/woodsiding_ext_05": {
            basetexture: "metal/milwall002",
            basetexturetransform: "center .5 .5 scale 3 1 rotate 90 translate 0 0",
            envmap: "environment maps/metal_generic_001",
            envmaptint: "[0.05 0.05 0.05]",
        },

        "wood/woodtrim_ext_01": {
            basetexture: "models/props/de_aztec/aztec_rope_bridge",
            basetexturetransform: "center .5 .5 scale 2 2 rotate 90 translate 0 0"
        },
        "props/metalfan001a": { alpha: "0", translucent: "1" },

        "glass/glass01": {
            basetexture: "metal/metalfence004a",
            basetexturetransform: "center .5 .5 scale 4 4 rotate 90 translate 0 0"
        },

        "metal/metaldoor034a": {
            basetexture: "metal/milwall002",
            envmap: ""
        },

        "de_mirage/decals/sign_c_decal": { alpha: "0", translucent: "1" },


        // B site plant
        "de_mirage/tile/de_mirage_tile_ver4_blend": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_color",
            basetexture2: "",
            blendmodulatetexture: "",
            // bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_rock_01_normal",
            //envmap: "environment maps/metal_generic_001",
            detail: "detail/dt_stone1",
            surfaceprop: "",
            surfaceprop2: "",
            normalmapalphaenvmapmask: "",
            envmaptint: "[0.01 0.01 0.01]",
        },
        "de_dust/tilefloor02": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_normal",
            envmap: "environment maps/metal_generic_001",
            detail: "detail/dt_stone1",
            envmapsaturation: ".1",
            bumpscale: "0.0",
            detailblendfactor: "0.5",
            detailscale: "[ 8 8 ]",
            normalmapalphaenvmapmask: "",
            envmaptint: "[0.04 0.04 0.04]",
        },
        "de_dust/tilefloor01": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_normal",
            envmap: "environment maps/metal_generic_001",
            detail: "detail/dt_stone1",
            envmapsaturation: ".1",
            bumpscale: "0.0",
            detailblendfactor: "0.5",
            detailscale: "[ 8 8 ]",
            normalmapalphaenvmapmask: "",
            envmaptint: "[0.04 0.04 0.04]",
        },

        // stairs by T spawn
        "de_dust/stonestep03": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_normal",
            // envmap: "environment maps/metal_generic_001",
            envmaptint: "[0.02 0.02 0.02]",
            basetexturetransform: "center .5 .5 scale .5 .5 rotate 90 translate 0 0"
        },
        "de_dust/stonestep01": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_normal",
            // envmap: "environment maps/metal_generic_001",
            envmaptint: "[0.02 0.02 0.02]",
            basetexturetransform: "center .5 .5 scale .5 .5 rotate 90 translate 0 0"
        },
        "de_dust/stonestep02": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_normal",
            //envmap: "environment maps/metal_generic_001",
            envmaptint: "[0.02 0.02 0.02]",
            basetexturetransform: "center .5 .5 scale .5 .5 rotate 90 translate 0 0"
        },
        "de_dust/stonestep04": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_normal",
            //envmap: "environment maps/metal_generic_001",
            envmaptint: "[0.02 0.02 0.02]",
            basetexturetransform: "center .5 .5 scale .5 .5 rotate 90 translate 0 0"
        },


        //market walls
        "plaster/plaster_int_02": { basetexture: "de_aztec/hr_aztec/hr_aztec_wall_plaster_04_color" },

        // market floots
        "tile/milflr002": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_normal",
            envmap: "environment maps/metal_generic_001",
            envmaptint: "[0.02 0.02 0.02]",
        },


        // tv
        "models/props_interiors/tvebstest": { basetexture: "vgui/achievements/win_map_de_aztec" },
        "models/props_interiors/tvstatic": { basetexture: "vgui/achievements/win_map_de_aztec" },

        // the holes around the metal breakables in window
        "models/props/de_mirage/wall_hole/wall_hole_diffuse": { basetexture: "de_aztec/hr_aztec/hr_aztec_ground_carvings_01_color" },

        // the actual breakables
        "models/props/de_mirage/wall_hole/sheet_metal_panel": {
            basetexture: "metal/milwall002",
            basetexturetransform: "center .5 .5 scale 3 1 rotate 90 translate 0 0",
            envmap: "environment maps/metal_generic_001",
            envmaptint: "[0.05 0.05 0.05]",
        },

        // window floor
        "tile/tile_int_02": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_normal",
        },


        // A site ramp -> idk something interesting
        "de_mirage/hr_mirage/mirage_plaster_2": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_ground_carvings_01_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_carvings_01_normal",
            envmap: "environment maps/metal_generic_001",
            envmaptint: "[0.02 0.02 0.02]",
        },

        // A site benches -> idk for now
        "models/props/de_mirage/bench_a/bench_a": { basetexture: "de_aztec/hr_aztec/hr_aztec_ground_carvings_01_color" },
        "models/props/de_vostok/trashcans": { basetexture: "models/props/de_aztec/aztec_rope_bridge", envmap: "" },

        // ground throughout mid and CT/T spawn
        "de_mirage/ground/de_mirage_ground_tilec_blend_diffuse ": {
            basetexture: "nature/swamp_roots01_green",
            basetexture2: "de_aztec/hr_aztec/hr_aztec_ground_rock_01_color",
            envmap: "environment maps/metal_generic_001",
            envmapmask: "",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_dirt_rough_01_normal",
            detailblendfactor: "",
            detail: "",
            blendmodulatetexture: "",
            normalmapalphaenvmapmask: "",
            bumpmap2: "de_aztec/hr_aztec/hr_aztec_ground_rock_01_normal",
            bumpscale: "",
            envmaptint: "[0.01 0.01 0.01]",
        },
        "de_mirage/ground/de_mirage_ground_tileh_blend2_diffuse": {
            basetexture: "nature/swamp_roots01_green",
            basetexture2: "de_aztec/hr_aztec/hr_aztec_ground_rock_01_color",
            envmap: "environment maps/metal_generic_001",
            envmapmask: "",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_dirt_rough_01_normal",
            detailblendfactor: "",
            detail: "",
            blendmodulatetexture: "",
            normalmapalphaenvmapmask: "",
            bumpmap2: "de_aztec/hr_aztec/hr_aztec_ground_rock_01_normal",
            bumpscale: "",
            envmaptint: "[0.06 0.06 0.06]",
        },
        "de_mirage/ground/de_mirage_tilef_diffuse": {
            basetexture: "nature/swamp_roots01_green",
            basetexture2: "",
            envmap: "environment maps/metal_generic_001",
            envmapmask: "",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_dirt_rough_01_normal",
            detailblendfactor: "",
            detail: "",
            blendmodulatetexture: "",
            normalmapalphaenvmapmask: "",
            bumpmap2: "de_aztec/hr_aztec/hr_aztec_ground_rock_01_normal",
            bumpscale: "",
            envmaptint: "[0.06 0.06 0.06]",
        },
        "de_mirage/ground/de_mirage_ground_tileh_blend_diffuse ": {
            basetexture: "nature/swamp_roots01_green",
            basetexture2: "de_aztec/hr_aztec/hr_aztec_ground_rock_01_color",
            envmap: "environment maps/metal_generic_001",
            envmapmask: "",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_dirt_rough_01_normal",
            detailblendfactor: "",
            detail: "",
            blendmodulatetexture: "",
            normalmapalphaenvmapmask: "",
            bumpmap2: "de_aztec/hr_aztec/hr_aztec_ground_rock_01_normal",
            bumpscale: "",
            envmaptint: "[0.03 0.03 0.03]",

        },

        // van ground
        "concrete/blend_blacktopsand_01": {
            basetexture: "nature/swamp_roots01_green",
            basetexture2: "nature/mudfloor001a",
            envmaptint: "[0.06 0.06 0.06]",
        },

        "brick/infwllg": {
            replace: "de_aztec/hr_aztec/hr_aztec_wall_stone_05_grey"
        },
        "brick/infwllg_overlay_a": { alpha: "0", translucent: "1" },

        // Walls

        "de_mirage/brick/de_mirage_brick_ver2_blend2_diffuse": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_moss_color",
            basetexture2: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_moss_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_grey_normal",
            bumpmap2: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_grey_normal",
        },


        // huge amount of the map trimming CHANGEME
        "de_dust/sitebwall13a": { basetexture: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_color" },
        "models/props/de_mirage/brush_shapes/sitebwall13a": { basetexture: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_color" },
        "de_mirage/base/de_mirage_base_trim_ver1_diffuse ": { replace: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_moss" },
        "de_dust/sitebwall08a": { basetexture: "de_aztec/hr_aztec/hr_aztec_ground_carvings_01_color" },
        "models/props/de_dust/dust_arch_small": { basetexture: "de_aztec/hr_aztec/hr_aztec_ground_carvings_01_color" },
        "de_dust/residwall04a": { basetexture: "de_aztec/hr_aztec/hr_aztec_ground_carvings_01_color" },

        // towers -> concrete 
        "models/props/de_mirage/towertop_d/towertop_d": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_moss_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_grey_normal",
            basetexturetransform: "center .5 .5 scale 4 2 rotate 90 translate 0 0",
        },


        "models/props/de_mirage/towertop_e/towertop_e": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_moss_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_grey_normal",
            basetexturetransform: "center .5 .5 scale 4 2 rotate 90 translate 0 0",
        },

        // small window things
        "de_mirage/decals/window_b_decal": { basetexture: "de_aztec/hr_aztec/hr_aztec_ground_carvings_01_color" },

        // weird square decals around A site
        "decals/win_square": {
            basetexture: "models/props/de_aztec/hr_aztec/aztec_trims/aztec_wall_04_surface_deco_01_moss_color",
            basetexturetransform: "center 0 0 scale 1 1 rotate 0 translate 0 0"
        },

        // some small window things around the map
        "models/de_dust/windows/window_4x8_square_flat": { basetexture: "de_aztec/hr_aztec/hr_aztec_ground_carvings_01_color" },

        // palace floors
        "tile/tile_mall_floor00": {
            basetexture: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_color",
            bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_normal",
            envmap: "environment maps/metal_generic_001",
            envmaptint: "[0.02 0.02 0.02]",
        },

        // i have no idea
        "cs_italy/plasterwall04": { replace: "de_aztec/hr_aztec/hr_aztec_wall_stone_05_grey" },
        "cs_italy/hpe_plaster_tint_tan": { replace: "de_aztec/hr_aztec/hr_aztec_wall_stone_05_grey" },

        //sign outside of market
        "models/props/de_dust/sign_shop01": { basetexture: "models/props/de_aztec/aztec_rope_bridge" },


    }
}




exports.mapData = mapData;
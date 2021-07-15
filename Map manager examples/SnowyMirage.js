exports.mapData = {

    overriddenMapName: "de_mirage",
    mapName: "Snowy mirage",

    onLoad: function () {
        //Cheat.Print("snow onInit called \n")

    },
    onUnload: function () {
        //Cheat.Print("snow onUnload called \n")

    },

    materialOverrides: {
        // A site ground 
        "de_mirage/marble/marble_01": {
            basetexture: "concrete/blacktop_ext_01",
            basetexture2: "ground/snow01",
            envmap: "",
            // bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_rock_01_normal",
            // envmap: "environment maps/metal_generic_001",
            // normalmapalphaenvmapmask: "",
            // envmaptint: "[0.1 0.1 0.1]", 
            //envmapmask: "models/effects/cube_white",
        },
        /*     ] mat_crosshair 
            hit material "de_aztec/hr_aztec/hr_aztec_blend_wall_stone_05_grey-mural2right"
            ] mat_crosshair 
            hit material "de_aztec/hr_aztec/hr_aztec_blend_wall_stone_05_grey-plaster04" */

        // CHANGEME
        "de_mirage/tile/de_mirage_tile_ver4_diffuse": {
            basetexture: "ground/snow01",
            envmap: "",
            // bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_normal",
            // envmap: "environment maps/metal_generic_003",
            // detail: "detail/dt_stone1",
            // envmapsaturation: ".1",
            // bumpscale: "0.0",
            // detailblendfactor: "0.5",
            // detailscale: "[ 8 8 ]",
            // normalmapalphaenvmapmask: "",
            // envmaptint: "[0.03 0.03 0.03]",
            //envmapmask: "models/effects/cube_white",
        },

        // STAIRS
        "de_dust/stonestep03": {
            basetexture: "concrete/blacktop_ext_01"
        },
        "de_dust/stonestep02": {
            basetexture: "concrete/blacktop_ext_01"
        },

        "models/de_dust/objects/stoneblocks01": { basetexture: "ground/snow01" },

        "concrete/concrete_ext_07": { replace: "ground/snow01" },
        "concrete/concrete_floor_04": { basetexture: "ground/snow01" },

        // various wood around the map
        "wood/milbeams003": { basetexture: "ground/snow01" },
        "models/props/de_mirage/wood_roof_plank/wood_ver3_diffuse": { basetexture: "ground/snow01" },
        "wood/woodbeam001a": { basetexture: "ground/snow01" },
        "de_mirage/wood/de_mirage_wood_ver3_diffuse": { basetexture: "ground/snow01" },
        "models/props/de_dust/hr_dust/dust_crates/dust_shipping_crate_02_wood_color": { basetexture: "ground/snow01" },
        "wood/woodfloor005a": { basetexture: "ground/snow01" },
        "wood/wood_int_02": { basetexture: "ground/snow01" },
        "wood/milcab001": { basetexture: "ground/snow01" },


        // A site door outline -> carved rock
        "models/props/de_mirage/large_door_b/large_door_b": {
            basetexture: "ground/snow01",
            // bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_carvings_01_normal",
            // envmap: "environment maps/metal_generic_001",
            // envmaptint: "[0.3 0.3 0.3]",
        },
        "models/props/de_mirage/wall_arch_a/wall_arch_a1": {
            basetexture: "ground/snow01",
            // bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_carvings_01_normal",
            // envmap: "environment maps/metal_generic_001",
            // envmaptint: "[0.3 0.3 0.3]",
        },


        // various windows 

        /* // A site door to oor
        "models/props/de_mirage/large_door_b/large_door_c": {
            basetexture: "models/props/de_aztec/hr_aztec/aztec_doors/aztec_door_largewood_02_color",
            bumpmap: "models/props/de_aztec/hr_aztec/aztec_doors/aztec_door_largewood_02_normal"
        }, */
        // ground curb things
        "models/props_urban/curbs001": { basetexture: "ground/snow01" },

        // B site plant
        "de_mirage/tile/de_mirage_tile_ver4_blend": {
            basetexture: "ground/snow01",
            basetexture2: "ground/snow01",
            // blendmodulatetexture: "",
            // // bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_rock_01_normal",
            // //envmap: "environment maps/metal_generic_001",
            // detail: "detail/dt_stone1",
            // surfaceprop: "",
            // surfaceprop2: "",
            // normalmapalphaenvmapmask: "",
            // envmaptint: "[0.01 0.01 0.01]",
        },

        "de_dust/tilefloor02": {
            basetexture: "ground/snow01",
            // bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_normal",
            // envmap: "environment maps/metal_generic_001",
            // detail: "detail/dt_stone1",
            // envmapsaturation: ".1",
            // bumpscale: "0.0",
            // detailblendfactor: "0.5",
            // detailscale: "[ 8 8 ]",
            // normalmapalphaenvmapmask: "",
            // envmaptint: "[0.04 0.04 0.04]",
        },
        "de_dust/tilefloor01": {
            basetexture: "ground/snow01",
            // bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_normal",
            // envmap: "environment maps/metal_generic_001",
            // detail: "detail/dt_stone1",
            // envmapsaturation: ".1",
            // bumpscale: "0.0",
            // detailblendfactor: "0.5",
            // detailscale: "[ 8 8 ]",
            // normalmapalphaenvmapmask: "",
            // envmaptint: "[0.04 0.04 0.04]",
        },

        // apts walls 
        "cs_italy/hpe_plaster_yellow_wall": { replace: "ground/snow01" },

        //market walls
        "plaster/plaster_int_02": { replace: "ground/snow01" },

        // blue walls 
        "de_mirage/plaster/de_mirage_plaster_blue1_blend": { replace: "ground/snow01" },
        "de_mirage/plaster/de_mirage_plaster_blue1_diffuse": { replace: "ground/snow01" },

        // tv
        //"models/props_interiors/tvebstest": {basetexture: "vgui/achievements\win_map_de_aztec"},

        //underpass
        "de_dust/marketwall05a": { basetexture: "ground/snow01" },
        "de_dust/marketwall02": { basetexture: "ground/snow01" },

        "tile/tilewall009b": { replace: "ground/snow01" },

        "models/props/de_mirage/broken_wall_1/broken_wall_1": { basetexture: "ground/snow01" },
        // sand decals -> not sand decals idk'
        "decals/sanddecal01": { color: "[0 0 0]", color2: "[2 2 2]" },
        "decals/sanddecal02": { color: "[0 0 0]", color2: "[2 2 2]" },

        "models/props/de_mirage/wall_hole/wall_hole_diffuse": { basetexture: "ground/snow01" },

        //wall decals -> idk
        "de_mirage/decals/wall_worna_decal": { alpha: "0", translucent: "1" },
        "decals/hpe_plaster_decal_decay_brick_04": { alpha: "0", translucent: "1" },
        "decals/hpe_plaster_decal_decay_brick_06": { alpha: "0", translucent: "1" },
        "decals/infwalldetail10": { alpha: "0", translucent: "1" },

        // A site ramp -> idk something interesting
        "de_mirage/hr_mirage/mirage_plaster_2": {
            basetexture: "ground/snow01",
            // bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_carvings_01_normal",
            // envmap: "environment maps/metal_generic_001",
            // envmaptint: "[0.05 0.05 0.05]",
        },

        // A site benches -> idk for now
        "models/props/de_mirage/bench_a/bench_a": { basetexture: "ground/snow01" },
        "models/props/de_vostok/trashcans": { basetexture: "ground/snow01", envmap: "" },

        // sandy ground -> dirt ground


        "de_mirage/ground/de_mirage_ground_tilec_blend_diffuse ": {
            basetexture: "ground/snow01",
            basetexture2: "concrete/blacktop_ext_01",
            // envmap: "environment maps/metal_generic_001",
            // envmapmask: "",
            // bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_dirt_rough_01_normal",
            // detailblendfactor: "",
            // detail: "",
            // blendmodulatetexture: "",
            // normalmapalphaenvmapmask: "",
            // bumpmap2: "de_aztec/hr_aztec/hr_aztec_ground_rock_01_normal",
            // bumpscale: "",
            // envmaptint: "[0.05 0.05 0.05]",
        },
        "de_mirage/ground/de_mirage_ground_tileh_blend2_diffuse": {
            basetexture: "ground/snow01",
            basetexture2: "concrete/blacktop_ext_01",
            // envmap: "environment maps/metal_generic_001",
            // envmapmask: "",
            // bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_dirt_rough_01_normal",
            // detailblendfactor: "",
            // detail: "",
            // blendmodulatetexture: "",
            // normalmapalphaenvmapmask: "",
            // bumpmap2: "de_aztec/hr_aztec/hr_aztec_ground_rock_01_normal",
            // bumpscale: "",
            // envmaptint: "[0.06 0.06 0.06]",
        },
        "de_mirage/ground/de_mirage_tilef_diffuse": {
            basetexture: "ground/snow01",
            basetexture2: "concrete/blacktop_ext_01",
            // basetexture2: "",
            // envmap: "environment maps/metal_generic_001",
            // envmapmask: "",
            // bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_dirt_rough_01_normal",
            // detailblendfactor: "",
            // detail: "",
            // blendmodulatetexture: "",
            // normalmapalphaenvmapmask: "",
            // bumpmap2: "de_aztec/hr_aztec/hr_aztec_ground_rock_01_normal",
            // bumpscale: "",
            // envmaptint: "[0.06 0.06 0.06]",
        },
        "de_mirage/ground/de_mirage_ground_tileh_blend_diffuse ": {
            basetexture: "ground/snow01",
            basetexture2: "concrete/blacktop_ext_01",
            // envmap: "environment maps/metal_generic_001",
            // envmapmask: "",
            // bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_dirt_rough_01_normal",
            // detailblendfactor: "",
            // detail: "",
            // blendmodulatetexture: "",
            // normalmapalphaenvmapmask: "",
            // bumpmap2: "de_aztec/hr_aztec/hr_aztec_ground_rock_01_normal",
            // bumpscale: "",
            // envmaptint: "[0.06 0.06 0.06]",

        },


        "brick/infwllg": {
            replace: "ground/snow01"
        },
        "brick/infwllg_overlay_a": { alpha: "0", translucent: "1" },

        // Walls
        "de_mirage/hr_mirage/mirage_plaster_blend_3": {
            basetexture: "ground/snow01",
            basetexture2: "concrete/blacktop_ext_01",

        },
        "de_mirage/plaster/de_mirage_plaster_salmon1_blend": {
            basetexture: "ground/snow01",
            basetexture2: "concrete/blacktop_ext_01",
        },
        "de_mirage/brick/de_mirage_brick_ver2_blend_update": {
            basetexture: "ground/snow01",
            basetexture2: "concrete/blacktop_ext_01",

        },
        "de_mirage/brick/de_mirage_brick_ver2_blend2_diffuse": {
            basetexture: "ground/snow01",
            basetexture2: "concrete/blacktop_ext_01",
        },
        "de_mirage/brick/de_mirage_brick_ver1_diffuse": {
            basetexture: "ground/snow01",
            basetexture2: "concrete/blacktop_ext_01",
        },
        "de_mirage/brick/de_mirage_brick_ver1pl_blend_diffuse": {
            basetexture: "ground/snow01",
            basetexture2: "concrete/blacktop_ext_01",
        },
        "de_mirage/base/de_mirage_top_ver1_blend": {
            basetexture: "ground/snow01",
            basetexture2: "concrete/blacktop_ext_01",
        },
        "de_mirage/base/de_mirage_top_ver1_diffuse": {
            basetexture: "ground/snow01",
            basetexture2: "concrete/blacktop_ext_01",
        },
        "de_mirage/hr_mirage/mirage_plaster_1": {
            basetexture: "ground/snow01",
            basetexture2: "concrete/blacktop_ext_01",
        },
        "de_dust/sitebwall07a": {
            basetexture: "ground/snow01",
            basetexture2: "concrete/blacktop_ext_01",
        },
        "brick/brick_ext_04": {
            basetexture: "ground/snow01",
            basetexture2: "concrete/blacktop_ext_01",
        },
        "de_mirage/plaster/de_mirage_plaster_salmon1_diffuse": {
            basetexture: "ground/snow01",
            basetexture2: "concrete/blacktop_ext_01",
        },

        "de_mirage/base/de_mirage_base_ver1_blend": {
            basetexture: "ground/snow01",
            basetexture2: "concrete/blacktop_ext_01",
        },
        "de_mirage/brick/de_mirage_brick_ver1_blend": {
            basetexture: "ground/snow01",
            basetexture2: "concrete/blacktop_ext_01",
        },
        "overlays/shacks_beverage": {
            basetexture: "ground/snow01",
            basetexture2: "concrete/blacktop_ext_01",
        },
        "de_mirage/base/de_mirage_mid_ver1_diffuse": {
            basetexture: "ground/snow01",
            basetexture2: "concrete/blacktop_ext_01",
        },



        // huge amount of the map trimming CHANGEME
        "de_dust/sitebwall13a": { basetexture: "ground/snow01" },
        "models/props/de_mirage/brush_shapes/sitebwall13a": { basetexture: "ground/snow01" },
        "de_mirage/base/de_mirage_base_trim_ver1_diffuse ": { replace: "ground/snow01" },
        //"de_mirage/base/de_mirage_base_trim_ver1_diffuse": { basetexture: "de_aztec/hr_aztec/hr_aztec_wall_stone_05_grey" },
        "de_dust/sitebwall08a": { basetexture: "ground/snow01" },
        "models/props/de_dust/dust_arch_small": { basetexture: "ground/snow01" },
        "de_dust/residwall04a": { basetexture: "ground/snow01" },

        //remove some electronics
        "models/props/cs_assault/wall_wires1": { alpha: "0", translucent: "1" },
        "models/props/props_utilities/electric_cables01": { alpha: "0", translucent: "1" },



        // towers -> concrete 
        "models/props/de_mirage/towertop_d/towertop_d": {
            basetexture: "ground/snow01",
            // bumpmap: "de_aztec/hr_aztec/hr_aztec_wall_stone_04_grey_normal",
            // basetexturetransform: "center .5 .5 scale 4 2 rotate 90 translate 0 0",
        },

        // small window things
        "de_mirage/decals/window_b_decal": { basetexture: "ground/snow01" },

        "decals/win_square": {
            basetexture: "ground/snow01",
            basetexturetransform: "center 0 0 scale 1 1 rotate 0 translate 0 0"
        },

        "models/de_dust/windows/window_4x8_square_flat": { basetexture: "ground/snow01" },

        // van ground
        "concrete/blend_blacktopsand_01": {
            basetexture: "ground/snow01",
            basetexture2: "ground/snow01",
            // //envmap: "environment maps/metal_generic_001",
            // envmapmask: "",
            // //bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_dirt_rough_01_normal",
            // detailblendfactor: "",
            // detail: "",
            // blendmodulatetexture: "",
            // normalmapalphaenvmapmask: "",
            // bumpmap2: "",
            // bumpscale: "",
            // envmaptint: "[0.06 0.06 0.06]",
        },

        // palace thing -> metal
        "wood/plywood02": { basetexture: "ground/snow01" },
        "wood/woodfloor005a": { basetexture: "ground/snow01" },

        //palace 
        "cs_italy/hpe_plaster_trim_light": { replace: "concrete/offflrasnow" },
        "cs_italy/hpe_plaster_tan_wall": { replace: "concrete/offflrasnow" },

        // Changing the envmap here results in some crazy effect 
        "tile/tile_mall_floor00": {
            basetexture: "ground/snow01",
            // bumpmap: "de_aztec/hr_aztec/hr_aztec_ground_paver_01_normal",
            // envmap: "environment maps/metal_generic_001",
            // envmaptint: "[0.02 0.02 0.02]",
        },

        "cs_italy/plasterwall04": { replace: "ground/snow01" },
        "cs_italy/hpe_plaster_tint_tan": { replace: "ground/snow01" },

        //sign outside of market
        "models/props/de_dust/sign_shop01": { basetexture: "ground/snow01" },

        // remove trash CHANGEME replaace it with something less retarded looking
        "decals/trashdecal01a": { alpha: "0", translucent: "1" },
        "decals/trashdecal04a": { alpha: "0", translucent: "1" },
        "decals/dust_poster3": { alpha: "0", translucent: "1" },
        "models/props_junk/garbage001a_01": { alpha: "0", translucent: "1" },
        "decals/offpapers03": { alpha: "0", translucent: "1" },
        "decals/trashdecal03a": { alpha: "0", translucent: "1" },
        "decals/trashdecal02a": { alpha: "0", translucent: "1" },
        "decals/trashdecal05a": { alpha: "0", translucent: "1" },
        "decals/trash_00": { alpha: "0", translucent: "1" },
        "overlays/trash_01": { alpha: "0", translucent: "1" },
        "decals/dust_poster5": { alpha: "0", translucent: "1" },
        "models/props/de_prodigy/prodwlla": { alpha: "0", translucent: "1" },
        "models/props_junk/food_used": { alpha: "0", translucent: "1" },

        // change decay decals 
        "decals/hpe_plaster_decal_decay_brick_03": { alpha: "0", translucent: "1" },
        "decals/hpe_plaster_decal_decay_04": { alpha: "0", translucent: "1" },
        "decals/infwalldetail09": { alpha: "0", translucent: "1" },
        "decals/plaster013a": { alpha: "0", translucent: "1" },
        "decals/plaster017a": { alpha: "0", translucent: "1" },

        // paint decals
        "overlays/urban_paintswatch_01a": { alpha: "0", translucent: "1" },
        "overlays/urban_paintswatch_02a": { alpha: "0", translucent: "1" },
        "overlays/urban_paintswatch_03a": { alpha: "0", translucent: "1" },
        "overlays/urban_paintswatch_04a": { alpha: "0", translucent: "1" },

        // remove lil sign on cat
        "models/props/de_dust/sign_street01": { alpha: "0", translucent: "1" },
    }
}
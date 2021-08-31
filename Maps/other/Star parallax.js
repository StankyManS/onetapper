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
        var fuck = {
            basetexture: "vgui/black",
            basetexture2: "vgui/black",
            envmap: "dev/snowfield",
            color: "{0 0 0}",
            bumpmap: "",
        };

        var fix_me = {
            basetexture: "vgui/black",
            basetexture2: "vgui/black",
        };

        // yeah
        var batch_replace_list = {
            // walls around the map (mostly A site) and some trimming
            "maps/de_mirage/de_mirage/brick/de_mirage_brick_ver2_blend_update_wvt_patch": fuck,
            "de_mirage/hr_mirage/mirage_plaster_blend_3": fuck,
            "de_mirage/hr_mirage/mirage_plaster_1": fuck,
            "de_mirage/brick/de_mirage_brick_ver1_blend": fuck,
            "overlays/shacks_beverage": fuck,
            "de_mirage/base/de_mirage_base_ver1_blend": fuck,

            "de_mirage/brick/de_mirage_brick_ver2_blend2_diffuse": fuck,
            "de_mirage/brick/de_mirage_brick_ver1_diffuse": fuck,
            "de_mirage/plaster/de_mirage_plaster_salmon1_diffuse": fuck,

            // inverse mossy grey texture walls
            "de_mirage/plaster/de_mirage_plaster_salmon1_blend": fuck,
            "de_mirage/brick/de_mirage_brick_ver2_blend_update": fuck,

            // only grey bricks
            "brick/brick_ext_04": fuck,

            "de_dust/sitebwall07a": fuck,

            // mossy bricks blending with smaller grey ones 
            "de_mirage/brick/de_mirage_brick_ver1pl_blend_diffuse": fuck,
            "de_mirage/base/de_mirage_top_ver1_blend": fuck,
            "de_mirage/base/de_mirage_mid_ver1_diffuse": fuck,

            // only small grey bricks around window/mid/apts
            "de_mirage/base/de_mirage_top_ver1_diffuse": fuck,
            "brick/brick_ext_04": fuck,
            "de_mirage/plaster/de_mirage_plaster_blue1_blend": fuck,
            "de_mirage/plaster/de_mirage_plaster_blue1_diffuse": fuck,
            "tile/tilewall009b": fuck,

            "models/props_foliage/mall_trees_branches01": fuck,
            "models/props_foliage/mall_trees_branches03": fuck,

            //palace walls
            "cs_italy/hpe_plaster_trim_light": fuck,
            "cs_italy/hpe_plaster_tan_wall": fuck,

            // apartments walls
            "cs_italy/hpe_plaster_yellow_wall": fuck,

            // a lot of the paved areas ground
            "concrete/concrete_floor_04": fuck,
            "models/props_urban/curbs001": fuck,
            "models/props/de_mirage/brush_shapes/residwall04a": fuck,
            "models/props_urban/stoop002": fuck,


            // b site broken wall
            "models/props/de_mirage/broken_wall_1/broken_wall_1": fuck,

            // underpass entrance arch
            "models/props/cs_italy/brick_arch01": fuck,

            // underpass walls
            "de_dust/marketwall05a": fuck,
            "de_dust/marketwall02": fuck,

            // lots of wood things around the map like palace exit and A site boxes
            "wood/milbeams003": fuck,
            "models/props/de_mirage/wood_roof_plank/wood_ver3_diffuse": fuck,
            "wood/woodbeam001a": fuck,
            "de_mirage/wood/de_mirage_wood_ver3_diffuse": fuck,
            "models/props/de_dust/hr_dust/dust_crates/dust_shipping_crate_02_wood_color": fuck,
            "wood/woodfloor005a": fuck,
            "wood/wood_int_02": fuck,
            "wood/milcab001": fuck,
            "wood/plywood02": fuck,
            "wood/woodfloor005a": fuck,

            // window arches in aps looking into b
            "models/de_dust/windows/window_6x10_arch": fuck,

            // various windows
            "models/de_dust/windows/window_4x6_arch": fuck,
            "models/de_dust/windows/window_4x8_arch_flat": fuck,
            "models/de_dust/windows/window_6x10_arch_flat": fuck,
            "models/de_dust/windows/window_4x8_square": fuck,

            // some stuff around A
            "de_mirage/doors/door_c": fuck,


            // things to remove 

            // sand decals -> not sand decals idk'
            "decals/sanddecal01": fuck,
            "decals/sanddecal02": fuck,

            // remove trash CHANGEME replaace it with something better
            "decals/trashdecal01a": fuck,
            "decals/trashdecal04a": fuck,
            "decals/dust_poster3": fuck,
            "models/props_junk/garbage001a_01": fuck,
            "models/props_junk/cardboard_boxes001a": fuck,
            "decals/offpapers03": fuck,
            "decals/trashdecal03a": fuck,
            "decals/trashdecal02a": fuck,
            "decals/trashdecal05a": fuck,
            "decals/trash_00": fuck,
            "overlays/trash_01": fuck,
            "decals/dust_poster5": fuck,
            "models/props/de_prodigy/prodwlla": fuck,
            "models/props_junk/food_used": fuck,
            "models/props/de_inferno/railing01a": fuck,
            "models/props/de_inferno/railing01": fuck,
            // why wont this remove?
            "models/props_junk/physics_trash_hospital": fuck,

            // brick decay decals
            "decals/hpe_plaster_decal_decay_brick_03": fuck,
            "decals/hpe_plaster_decal_decay_04": fuck,
            "decals/infwalldetail09": fuck,
            "decals/plaster013a": fuck,
            "decals/plaster017a": fuck,
            "de_mirage/decals/wall_worna_decal": fuck,
            "decals/hpe_plaster_decal_decay_brick_04": fuck,
            "decals/hpe_plaster_decal_decay_brick_06": fuck,
            "decals/infwalldetail10": fuck,
            "decals/decalstain001a": fuck,

            // some posters
            "de_mirage/decals/poster_a_decal": fuck,
            "de_mirage/decals/poster_b_decal": fuck,

            // electronics by underpass
            "models/props/cs_assault/wall_wires1": fuck,
            "models/props/props_utilities/electric_cables01": fuck,

            // various electronics
            "models/props_urban/airconditioner001": fuck,

            "models/effects/urban_puddle01a": fuck,
            "models/props_debris/composite_debris2": fuck,
            "models/props_junk/plasticcrate01a": fuck,

            // paint decals
            "overlays/urban_paintswatch_01a": fuck,
            "overlays/urban_paintswatch_02a": fuck,
            "overlays/urban_paintswatch_03a": fuck,
            "overlays/urban_paintswatch_04a": fuck,

            // sign on cat
            "models/props/de_dust/sign_street01": fuck,

            // A site ground 
            "de_mirage/marble/marble_01": fuck,

            // a site slight incline 
            "de_mirage/tile/de_mirage_tile_ver4_diffuse": fuck,

            // stone blocks on A site
            "models/de_dust/objects/stoneblocks01": fuck,

            // i have no idea what this is 
            "concrete/concrete_ext_07": fuck,
            "concrete/concrete_floor_04": fuck,

            // A site door outline -> carved rock
            "models/props/de_mirage/large_door_b/large_door_b": fuck,
            "models/props/de_mirage/wall_arch_a/wall_arch_a1": fuck,

            //ticket booth
            "wood/woodsiding_ext_05": fuck,

            "wood/woodtrim_ext_01": fuck,
            "props/metalfan001a": fuck,

            "glass/glass01": fuck,

            "metal/metaldoor034a": fuck,

            "de_mirage/decals/sign_c_decal": fuck,


            // B site plant

            "de_dust/tilefloor02": fuck,
            "de_dust/tilefloor01": fuck,

            // stairs by T spawn
            "de_dust/stonestep03": fuck,
            "de_dust/stonestep01": fuck,
            "de_dust/stonestep02": fuck,
            "de_dust/stonestep04": fuck,


            //market walls
            "plaster/plaster_int_02": fuck,

            // market floots
            "tile/milflr002": fuck,


            // tv
            "models/props_interiors/tvebstest": fuck,


            // the holes around the metal breakables in window
            "models/props/de_mirage/wall_hole/wall_hole_diffuse": fuck,

            // the actual breakables
            "models/props/de_mirage/wall_hole/sheet_metal_panel": fuck,

            // window floor
            "tile/tile_int_02": fuck,


            // A site ramp -> idk something interesting
            "de_mirage/hr_mirage/mirage_plaster_2": fuck,

            // A site benches -> idk for now
            "models/props/de_mirage/bench_a/bench_a": fuck,
            "models/props/de_vostok/trashcans": fuck,
            // ground throughout mid and CT/T spawn
            "de_mirage/ground/de_mirage_ground_tilec_blend_diffuse ": fuck,
            "de_mirage/ground/de_mirage_ground_tileh_blend2_diffuse": fuck,
            "de_mirage/ground/de_mirage_tilef_diffuse": fuck,
            "de_mirage/ground/de_mirage_ground_tileh_blend_diffuse ": fuck,

            // van ground


            "brick/infwllg": fuck,
            "brick/infwllg_overlay_a": fuck,

            // Walls

            "de_mirage/brick/de_mirage_brick_ver2_blend2_diffuse": fuck,

            // huge amount of the map trimming CHANGEME
            "de_dust/sitebwall13a": fuck,
            "models/props/de_mirage/brush_shapes/sitebwall13a": fuck,
            "de_mirage/base/de_mirage_base_trim_ver1_diffuse ": fuck,
            "de_dust/sitebwall08a": fuck,
            "models/props/de_dust/dust_arch_small": fuck,
            "de_dust/residwall04a": fuck,

            // towers -> concrete 
            "models/props/de_mirage/towertop_d/towertop_d": fuck,


            "models/props/de_mirage/towertop_e/towertop_e": fuck,

            // small window things
            "de_mirage/decals/window_b_decal": fuck,

            // weird square decals around A site
            "decals/win_square": fuck,

            // some small window things around the map
            "models/de_dust/windows/window_4x8_square_flat": fuck,

            // palace floors
            "tile/tile_mall_floor00": fuck,

            // i have no idea
            "cs_italy/plasterwall04": fuck, "cs_italy/hpe_plaster_tint_tan": fuck,
            //sign outside of market
            "models/props/de_dust/sign_shop01": fuck,
            "models/props/de_dust/rug01": fuck,
            "models/props/de_dust/rug02": fuck,
            "models/props/de_dust/rug03": fuck,
            "models/props/de_dust/rug04": fuck,
            "models/props/de_dust/rug05": fuck,
            "metal/metalfence004a": fuck,
            "skybox/sky_dustbk": fuck,
            "skybox/sky_dustdn": fuck,
            "skybox/sky_dustft": fuck,
            "skybox/sky_dustlf": fuck,
            "skybox/sky_dustrt": fuck,
            "skybox/sky_dustup": fuck,
            "decals/debris_concrete001a": fuck,
            "models/props_lab/powerbox001": fuck,
            "models/props_urban/fence001": fuck,
            "models/props/de_inferno/ammo_pallet01": fuck,
            "models/props/de_inferno/artillery02": fuck,
            "models/props/de_inferno/bomb_tanks": fuck,
            "models/props/de_inferno/hazard_ribbons": fuck,
            "models/props/de_mirage/large_door_b/large_door_c": fuck,

            "models/props_foliage/urban_trees_branches03": fuck,
            "models/props_foliage/urban_trees_branches03_small": fuck,
            "models/props_foliage/urban_trees_branches03_medium_animated": fuck,
            "models/props_foliage/urban_trees_branches03_medium": fuck,
            "models/props_foliage/urban_trees_branches03_animated": fuck,
            "models/props_foliage/urban_trees_barks01_medium": fuck,
            "models/props_foliage/urban_trees_barks01_still": fuck,
            "models/props_foliage/urban_trees_barks01_medium_animated": fuck,
            "models/props_foliage/urban_trees_barks01_small": fuck,
            "models/props/de_vertigo/wood_pallet_01": fuck,
            "models/props/de_vertigo/cinderblock": fuck,

            "models/props/gg_vietnam/vietnam_hut_wood_gang": fuck,
            "models/props/de_dust/awning01": fuck,
            "models/props/de_vostok/hardwareitems01": fuck,
            "models/props_foliage/mall_trees_barks01": fuck,
            "models/props/de_aztec/aztec_scaffolding_system": fuck,
            "models/props/cs_assault/ladderaluminium": fuck,
            "models/props_foliage/urban_trees_branches02_mip0": fuck,
            "wood/wood_ext_05": fuck,
            "decals/bombsite_letter_a": fuck,
            "decals/bombsite_a": fuck,
            "models/cs_italy/doora": fuck,
            "decals/decalrug004a": fuck,
            "models/props/de_dust/skybox_dust_hotel01": fuck,
            "models/props/de_dust/skybox_dust_hotel02": fuck,
            "models/cs_italy/plaster": fuck,
            "models/props/de_inferno/flower_barrel": fuck,
            "models/props/de_inferno/claypot_plants01": fuck,
            "models/props/de_inferno/claypot03": fuck,
            "models/props/cs_italy/hpe_italy_pipe_wall": fuck,
            //"decals/drainage_stain01": fuck,
            "decals/stain01": fuck,
            "models/props_urban/plastic_table_set001": fuck,
            "models/props_wasteland/prison_objects002": fuck,
            "models/de_dust/windows/window_6x8_sill": fuck,
            "models/props/de_dust/dust_food_crates": fuck,
            "models/props/de_inferno/cannon": fuck,
            "models/props/de_inferno/wagon": fuck,
            "models/props_foliage/urban_palm_trunkdust_animated": fuck,
            "models/props_rooftop/rooftopcluster06a": fuck,
            "models/props_street/electrical_boxes": fuck,
            "models/props_urban/chimneys001": fuck,
            "models/props_urban/plastic_junk001": fuck,
            "models/props_urban/telephone_pole001": fuck,
            "models/props_urban/telephone_pole_addons001": fuck,
            "de_dust/door02": fuck,
            "de_dust/door04": fuck,
            "decals/decalstain015a": fuck,
            "metal/vertigo_ibeam": fuck,
            "models/props/de_dust/awning_smalldoor": fuck,
            "decals/decalstain002a": fuck,
            "decals/drainage_stain_01": fuck,
            "cs_italy/tileroof01": fuck,
            "decals/drainage_stain_03": fuck,
            "models/props/cs_militia/ladderwood": fuck,
            "decals/decalstain011a": fuck,
            "decals/infstains": fuck,
            "de_mirage/plaster_worn/de_mirage_plaster_brick4_diffuse": fuck,
            "brick/infwllf": fuck,
            "models/props/de_inferno/furniturecouch001a": fuck,
            "models/props_lab/powerbox001": fuck,
            "decals/decalrug003a": fuck,
            "models/props/gg_tibet/furnitureinteriorcabinetswood": fuck,
            "models/props_c17/furnituretable001a": fuck,
            "de_dust/dutile1": fuck,
            "wood/wood_dock_pylon_01": fuck,
            "cs_havana/door01": fuck,
            "models/props_interiors/sofa_chair": fuck,
            "models/props_vehicles/4carz1024": fuck,
            "models/props_vehicles/4carz1024_glass": fuck,
            "models/props/de_inferno/infwllf": fuck,
            "models/props_junk/physics_trash": fuck,
            "models/props_junk/cinderblock01a": fuck,
            "models/props_pipes/pipeset02d_512_001a": fuck,
            "models/de_dust/windows/window_4x8_arch": fuck,
            "models/de_dust/windows/window_6x8_shutters": fuck,
            "models/de_dust/windows/window_6x8_shutters_flat": fuck,
            "models/props/de_mirage/overhang/overhang/overhang_ver1_diffuse": fuck,
            "models/props_c17/furniturestove001a": fuck,
            "models/props_c17/potspans001a": fuck,
            "models/props_c17/furniturewooddresser001a": fuck,
            "models/props/cs_office/microwave": fuck,
            "models/props/cs_office/shelves_stuff": fuck,
            "models/props_interiors/refrigeratordoor01a": fuck,
            "models/props_interiors/refrigeratordoor02a": fuck,
            "models/props_interiors/refrigerator01a": fuck,
            "stone/counter01": fuck,
            "models/props/de_inferno/furniture_couch02a": fuck,
            "models/props_interiors/woodfurniture01": fuck,
            "models/props_interiors/lamps_off": fuck,
            "models/props_wasteland/prison_switchbox01": fuck,
            "models/props/de_mirage/rusted_fence_a/rusted_fence_a": fuck,
            "decals/decalstain005a": fuck,
            "decals/decalrug005a": fuck,
            "decals/rug_green01": fuck,
            "models/props_furniture/cafe_barstool1": fuck,
            "de_dust/dusandwlltrim3": fuck,
            "wood/milsteps001": fuck,
            "models/props/de_inferno/bench_wood_color": fuck,
            "de_train/train_cement_stain_01": fuck,
            "decals/trashdecal01b": fuck,
            "models/props/de_mirage/bomb_site_tarp/bomb_site_tarp": fuck,
            "models/props/de_mirage/tarp_a/tarp_a_diffuse": fuck,
            "models/props/de_mirage/small_door_b/small_door_b_diffuse": fuck,
            "models/props/de_mirage/window_a/window_a_diffuse": fuck,
            "models/props/de_mirage/base_rocks_a/base_rocks_a": fuck,
            "decals/decalrug001a": fuck,
            "models/props_interiors/furniture_wood01": fuck,
            "models/props_interiors/furniture_wood02": fuck,
            "models/props_interiors/clothing_pile3": fuck,
            "models/props_interiors/sofa01": fuck,
            "models/props_junk/metalbucket01a": fuck,
            "models/props_highway/metal_corrugated03a": fuck,
            "models/props_highway/metal_corrugated03b": fuck,
            "models/props/cs_militia/van1": fuck,
            "models/props/de_inferno/wall_lamp_bulb": fuck,
            "models/props/de_inferno/ceiling_light": fuck,
            "models/props_vehicles/van1": fuck,
            "models/props/de_dust/dust_rusty_barrel": fuck,
            "models/cs_italy/market_dolly01": fuck,
            "models/props/gg_vietnam/cloth01": fuck,
            "decals/bombsite_letter_b": fuck,
            "decals/bombsite_right_arrow": fuck,
            "models/props/de_mirage/pillow_a/pillow_a_diffuse": fuck,
            "models/props/de_mirage/hanging_cloth_a/hanging_cloth_a": fuck,
            "models/props/de_mirage/lamp/lamp_diffuse/lamp_diffuse": fuck,
            "models/props/de_mirage/pillow_c/pillow_c_diffuse": fuck,
            "models/props/de_mirage/pillow_b/pillow_b_diffuse": fuck,
            "models/props/de_mirage/couch_a/couch_a_diffuse": fuck,
            "models/props_junk/trashdumpster01a": fuck,
            "models/props_junk/trashclusters01": fuck,
            "decals/bombsite_left_arrow": fuck,
            "models/cs_italy/blkmetal": fuck,
            "models/cs_italy/light_orange2": fuck,
            "models/cs_italy/lampholder2a": fuck,
            "models/cs_italy/pwtrim2": fuck,
            "models/props_foliage/flower_c": fuck,
            "models/props_foliage/flower_b": fuck,
            "models/props_foliage/flower_a": fuck,
            "models/props_rooftop/roof_dish001": fuck,
            "cable/rope": fuck,
            "cable/rope2": fuck,
            "models/props/de_inferno/claypot02": fuck,
            "wood/woodsteps001": fuck,
            "models/props/gg_tibet/dishestibet": fuck,
            "models/de_dust/windows/window_4x6_square": fuck,
            "glass/glasswindow048a": fuck,
            // things that dissapear when envmap is applied
            "concrete/blend_blacktopsand_01": fix_me,
            "de_mirage/tile/de_mirage_tile_ver4_blend": fix_me,
            
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
    }
}




exports.mapData = mapData;
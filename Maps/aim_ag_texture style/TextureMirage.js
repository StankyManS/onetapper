function assign(object, source) {
    Object.keys(source).forEach(function (key) {
        object[key] = source[key];
    });
}

mapData = {

    overriddenMapName: "de_mirage",
    mapName: "TextureMirage",

    onLoad: function () {
        var floor = {
            basetexture: "dev/dev_measuregeneric01b",
            basetexture2: "dev/dev_measuregeneric01b",
            basetexturetransform: "center .5 .5 scale 5 5 rotate 0 translate 0 0",
            detail: "",
            bumpmap: "",
            bumpmap2: "",
            envmap: "",
        }

        var wall = {
            basetexture: "dev/dev_measurewall01a",
            basetexture2: "dev/dev_measurewall01a",
            basetexturetransform: "center .5 .5 scale 1.5 1.5 rotate 0 translate 0 0",
            detail: "",
            bumpmap: "",
            bumpmap2: "",
            envmap: "",
        }

        var wall_2 = {
            basetexture: "dev/dev_measurewall01d",
            basetexture2: "dev/dev_measurewall01d",
            basetexturetransform: "center .5 .5 scale 1.5 1.5 rotate 0 translate 0 0",
            detail: "",
            bumpmap: "",
            bumpmap2: "",
            envmap: "",
        }

        // things to simply make invisible
        var remove_me = {
            basetexture: "dev/dev_measurewall01d",
            basetexture2: "dev/dev_measurewall01d", 
            alpha: "0", translucent: "1"
        };

        // yeah
        var batch_replace_list = {
            "de_mirage/marble/marble_01": floor,
            "de_mirage/ground/de_mirage_ground_tileh_blend_diffuse ": floor,
            "de_mirage/ground/de_mirage_ground_tilec_blend_diffuse ": floor,
            "de_mirage/tile/de_mirage_tile_ver4_diffuse": floor,
            "de_mirage/hr_mirage/mirage_plaster_blend_3": wall,
            "de_mirage/hr_mirage/mirage_plaster_2": wall,
            "de_dust/sitebwall13a": wall,
            "cs_italy/hpe_plaster_tan_wall": wall,
            "de_dust/dusandwlltrim3": wall,
            "de_mirage/base/de_mirage_top_ver1_blend": wall,
            "brick/brick_ext_04": wall,
            "de_mirage/base/de_mirage_top_ver1_diffuse": wall,
            "de_mirage/plaster/de_mirage_plaster_salmon1_diffuse": wall,
            "de_mirage/plaster/de_mirage_plaster_salmon1_blend": wall,
            "de_mirage/base/de_mirage_mid_ver1_diffuse": wall,
            "de_dust/marketwall02": wall,
            "de_mirage/brick/de_mirage_brick_ver2_blend_update": wall,
            "de_mirage/brick/de_mirage_brick_ver1_diffuse": wall,
            "de_mirage/brick/de_mirage_brick_ver2_blend2_diffuse": wall,
            "de_mirage/brick/de_mirage_brick_ver1pl_blend_diffuse": wall,
            "de_dust/sitebwall07a": wall,
            "de_mirage/plaster/de_mirage_plaster_blue1_blend": wall,
            "plaster/plaster_int_02": wall,
            "de_mirage/base/de_mirage_base_ver1_blend": wall,
            "de_mirage/plaster/de_mirage_plaster_blue1_diffuse": wall,
            "de_dust/tilefloor01": floor,
            "de_dust/tilefloor02": floor,
            "de_mirage/tile/de_mirage_tile_ver4_blend": floor,
            "de_mirage/ground/de_mirage_tilef_diffuse": floor,
            "de_mirage/ground/de_mirage_ground_tileh_blend2_diffuse": floor,
            "concrete/blend_blacktopsand_01": floor,
            "tools/toolsskybox": floor,
            "concrete/concrete_floor_04": floor,
            "cs_italy/hpe_plaster_yellow_wall": wall,
            "cs_italy/plasterwall04": wall,
            "de_dust/dusandwlltrim3": wall,
            "tile/tilewall009b": wall,
            "cs_italy/hpe_plaster_yellow_wall": wall,
            "concrete/concrete_ext_07": wall,
            "de_dust/dutile1": wall,
            "de_mirage/brick/de_mirage_brick_ver1_blend": wall,
            "de_mirage/plaster_worn/de_mirage_plaster_brick4_diffuse": wall,
            "cs_italy/hpe_plaster_trim_light": wall,
            "tile/tile_mall_floor00": floor,
            "de_dust/marketwall05a": wall,


            // Now stuff done by hand

            // A site door
            "models/props/de_mirage/large_door_b/large_door_b": wall_2,
            "models/props/de_mirage/large_door_b/large_door_c": wall_2,

            // Small arches by the door
            "models/props/de_mirage/wall_arch_a/wall_arch_a1": wall_2,

            "de_mirage/decals/wall_worna_decal": wall,

            // palace outside
            "wood/plywood02": wall_2,
            "wood/woodfloor005a": wall_2,
            "models/props/de_aztec/aztec_scaffolding_system": wall_2,


            // large open door arches
            "models/props/de_dust/dust_arch_small": wall_2,


            "de_mirage/doors/door_a": wall,

            "models/props_vehicles/4carz1024_glass": wall_2,
            "models/props_vehicles/4carz1024": wall_2,
            "models/props_urban/telephone_pole_addons001": wall_2,
            "models/props_urban/telephone_pole001": wall_2,
            "models/props/de_dust/sign_shop03": wall_2,
            "models/props/de_dust/sign_stop": wall_2,

            // stone blocks
            "models/de_dust/objects/stoneblocks01": wall_2,

            // A site artillery boxes
            "models/props/de_inferno/artillery02": wall_2,
            "models/props/de_inferno/bomb_tanks": wall_2,
            "models/props/de_inferno/ammo_pallet01": wall_2,
            "wood/milbeams003": wall_2,
            "wood/woodbeam001a": wall_2,
            "models/props/de_inferno/hazard_ribbons": wall_2,

            "models/props/de_dust/hr_dust/dust_crates/dust_shipping_crate_02_wood_color": wall_2,
            "models/props/de_dust/hr_dust/dust_crates/dust_shipping_crate_02_wood_decals": wall_2,
            "models/props/gg_vietnam/vietnam_hut_wood_gang": wall_2,

            // weird rofotop things
            "de_dust/residwall04a": wall,
            "de_dust/sitebwall13a": wall,
            "models/props/de_mirage/brush_shapes/residwall04a": wall,
            "models/props/de_mirage/brush_shapes/sitebwall13a": wall,
            "de_mirage/hr_mirage/mirage_plaster_1": wall,
            "models/cs_italy/pwtrim2": wall,

            "models/props/de_vertigo/cinderblock": wall_2,
            "models/props/de_vertigo/wood_pallet_01": wall_2,

            // ticket
            "wood/wood_ext_05": wall_2,
            "wood/woodsiding_ext_05": wall_2,
            "wood/woodtrim_ext_01": wall_2,
            "props/metalfan001a": wall_2,
            "glass/glass01": wall_2,
            "de_mirage/decals/sign_c_decal": remove_me,
            "metal/metaldoor034a": wall_2,

            // small floor curbs
            "models/props_urban/curbs001": floor,

            //trash cans and bench
            "models/props/de_vostok/trashcans": wall_2,
            "models/props/de_mirage/bench_a/bench_a": wall_2,

            // chair
            "models/props/gg_tibet/furnitureinteriorcabinetswood": wall_2,

            "models/cs_italy/doora": wall,
            "models/cs_italy/plaster": floor,
            "models/cs_italy/mkt_table2": wall_2,
            // mid stuff
            "models/props/de_dust/dust_food_crates": wall_2,
            "models/props/de_inferno/flower_barrel": wall_2,
            "models/props/de_inferno/cart_wheel": wall_2,
            "models/props/de_inferno/wagon": wall_2,

            "models/props_urban/airconditioner001": wall_2,

            // treez
            "models/props_foliage/urban_trees_barks01_still": wall_2,
            "models/props_foliage/urban_trees_barks01_medium_animated": wall_2,
            "models/props_foliage/urban_trees_barks01_small": wall_2,
            "models/props_foliage/urban_trees_barks01_medium": wall_2,

            "models/props_foliage/mall_trees_branches01": wall_2,
            "models/props_foliage/mall_trees_branches02": wall_2,
            "models/props_foliage/mall_trees_branches03": wall_2,
            "models/props_foliage/urban_trees_branches02_mip0": wall_2,
            "models/props_foliage/urban_trees_branches03": wall_2,
            "models/props_foliage/urban_trees_branches03_small": wall_2,
            "models/props_foliage/urban_trees_branches03_medium_animated": wall_2,
            "models/props_foliage/urban_trees_branches03_medium": wall_2,
            "models/props_foliage/urban_trees_branches03_animated": wall_2,
            "models/props_foliage/urban_palm_trunkdust_animated": wall_2,

            // mid bench
            "models/props/de_inferno/bench_wood_color": wall_2,

            // ladder
            "models/props/cs_militia/ladderwood": wall_2,

            // rocks
            "models/props/de_mirage/base_rocks_a/base_rocks_a": remove_me,

            // lightz
            "models/props_urban/porch_light003": wall_2,

            "de_mirage/doors/door_c": wall,
            "metal/vertigo_ibeam": wall_2,
            "wood/wooddoor026a": wall,
            "wood/wooddoor019a": wall,


            // interior stuff in apts
            "models/props_interiors/sofa01": wall_2,
            "cs_havana/door01": wall_2,
            "models/props_interiors/tv": wall_2,
            "models/props_interiors/tvebstest": wall_2,
            "models/props_c17/furnituretable001a": wall_2,
            "models/props_interiors/sofa_chair": wall_2,
            "wood/wood_dock_pylon_01": wall,
            "models/props_junk/shoe001a": remove_me,
            "wood/wood_int_02": wall_2,
            "models/props_furniture/cafe_barstool1": wall_2,
            "models/gibs/woodgibs/woodgibs02": wall_2,
            "models/props_c17/furniturestove001a": wall_2,
            "models/props_c17/furniturewooddresser001a": wall_2,
            "models/props/cs_office/microwave": wall_2,
            "models/props/cs_office/shelves_stuff": wall_2,
            "models/props_interiors/refrigeratordoor01a": wall_2,
            "models/props_interiors/refrigeratordoor02a": wall_2,
            "models/props_interiors/refrigerator01a": wall_2,
            "wood/milcab001": wall_2,
            "stone/counter01": wall_2,
            "models/props/de_inferno/ceiling_light": wall_2,
            "models/props/de_inferno/wall_lamp_bulb": wall_2,
            "models/props_junk/trashdumpster01a": wall_2,
            "models/props/de_inferno/hr_i/inferno_ceiling_fan/inferno_ceiling_fan_color": wall_2,
            "models/props_interiors/clothing_pile3": remove_me,
            "models/props_interiors/furniture_wood02": wall_2,
            "models/props_interiors/furniture_wood01": wall_2,
            "models/props/de_inferno/furniture_couch02a": wall_2,
            "models/props_interiors/woodfurniture01": wall_2,
            "models/props/de_mirage/pillow_a/pillow_a_diffuse": wall_2,
            "models/props_interiors/lamps_off": wall_2,
            "models/props/de_inferno/furniturecouch001a": wall_2,

            // Small windows all across the map
            "models/de_dust/windows/window_4x8_square_flat": wall,
            "models/de_dust/windows/window_4x8_square": wall,
            "models/de_dust/windows/window_4x8_arch": wall,
            "models/de_dust/windows/window_6x10_arch": wall,
            "models/de_dust/windows/window_6x10_arch_flat": wall,
            "models/de_dust/windows/window_4x8_arch_flat": wall,
            "models/de_dust/windows/window_6x8_shutters": wall,
            "models/de_dust/windows/window_6x8_sill": wall,
            "models/de_dust/windows/window_6x8_shutters_flat": wall,
            "models/de_dust/windows/window_4x6_arch": wall,
            "models/de_dust/windows/window_4x6_square": wall,
            "models/de_dust/windows/window_2x6_arch": wall,
            "glass/glasswindow048a": wall,
            "de_dust/sitebwall08a": wall,
            "models/props/de_dust/awning01": wall_2,
            "de_mirage/base/de_mirage_base_trim_ver1_diffuse ": wall,
            "models/props_foliage/flower_c": wall_2,
            "models/props_foliage/flower_b": wall_2,
            "models/effects/urban_puddle01a": floor,
            "wood/woodsteps001": floor,
            "models/props/de_inferno/claypot02": wall_2,
            "metal/metalwall031a": wall_2,


            //
            "effects/metalrail011a": wall_2,
            "models/props/cs_italy/brick_arch01": wall_2,

            // large windows in T spawn
            "models/props/de_mirage/window_a/window_a_diffuse": wall,
            "models/props_vehicles/bus01_a_2": wall_2,
            "models/props_vehicles/bus01_b_2": wall_2,
            "models/de_piranesi/pi_apc": wall_2,
            "models/props_urban/streetlight001": wall_2,

            // steps 
            "de_dust/stonestep03": floor,
            "models/props/de_inferno/cannon": wall_2,

            // various wall rugs
            "models/props/de_dust/rug06": wall_2,
            "models/props/de_dust/rug02": wall_2,
            "models/props/de_dust/rug03": wall_2,
            "models/props/de_dust/rug01": wall_2,
            "models/props/de_dust/rug05": wall_2,
            "models/props/de_dust/rug04": wall_2,
            "tile/tile_int_02": floor,
            "cs_italy/hpe_plaster_tint_tan": wall,
            "brick/infwllg": wall,
            "models/props/cs_militia/sawhorse": wall_2,
            "models/props_urban/plastic_table_set001": wall_2,
            "models/props_street/electrical_boxes": wall_2,
            "models/props/de_dust/awning_smalldoor": wall_2,
            "models/props_c17/furnitureboiler001a": wall_2,
            "models/props/de_mirage/overhang/overhang/overhang_ver1_diffuse": wall_2,
            "models/props/de_vertigo/construction_wood_2x4_pile01": wall_2,
            "de_nuke/nuke_metaltrims_01": wall_2,
            "models/props_lighting/light_shop": wall_2,
            "models/props_lighting/light_shop_off": wall_2,

            // clay plant pots
            "models/props/de_inferno/claypot_plants01": wall_2,
            "models/props/de_inferno/claypot03": wall_2,
            "de_mirage/doors/door_b": wall,
            "wood/milsteps001": wall_2,
            "plaster/plaster_ext_19": wall_2,
            "models/props/de_dust/dust_rusty_barrel": wall_2,
            "models/props/de_mirage/broken_wall_1/broken_wall_1": wall_2,
            "models/props/de_inferno/railing01a": wall_2,
            "models/props/de_inferno/railing01": wall_2,
            "de_train/train_dirt_decal_06": remove_me,
            "models/props_urban/fence001": wall_2,
            "models/props/de_mirage/shutter_window/shutter_window_diffuse": wall_2,
            "models/props_exteriors/guardrail": wall_2,
            "metal/metalhull003a": wall_2,
            "models/props/de_dust/skybox_dust_hotel01": wall,
            "models/props/de_dust/skybox_dust_hotel02": wall,
            "models/props/de_mirage/pillow_b/pillow_b_diffuse": wall_2,
            "models/props/de_mirage/pillow_c/pillow_c_diffuse": wall_2,
            "models/props/gg_tibet/dishestibet": wall_2,
            "models/props/de_mirage/couch_a/couch_a_diffuse": wall_2,
            "models/props_c17/gate_door01a": wall_2,

            // van
            "models/props/cs_militia/van1": wall_2,
            "models/props_vehicles/van1": wall_2,
            "models/cs_italy/market_dolly01": wall_2,
            "models/props/gg_vietnam/cloth01": wall_2,
            "models/props_rooftop/roof_dish001": wall_2,
            "models/props_rooftop/rooftopcluster06a": wall_2,
            "models/props_urban/chimneys001": wall_2,

            // b site tarp things
            "models/props_highway/metal_corrugated03a": wall_2,
            "models/props_c17/chair_stool01a": wall_2,
            "models/props/cs_assault/warehouserailing": wall_2,
            "models/props/de_mirage/bomb_site_tarp/bomb_site_tarp": wall_2,
            "models/props/de_mirage/hanging_cloth_a/hanging_cloth_a": wall_2,
            "models/props_urban/tire001": wall_2,
            "models/props/de_mirage/tarp_a/tarp_a_diffuse": wall_2,
            "de_dust/door011": wall,
            "models/props_interiors/shelvingstore_grocery01": wall_2,
            "models/props_street/trashbin01": wall_2,
            "models/props_unique/grocerystorechiller01": wall_2,
            "models/props_mall/cash_register": wall_2,
            "models/props/cs_assault/ladderaluminium": wall_2,
            "tile/milflr002": floor,
            "models/props/de_mirage/small_door_b/small_door_b_diffuse": wall_2,

            // t spawn fence
            "models/props/de_mirage/rusted_fence_a/rusted_fence_a": wall_2,
            "de_mirage/wood/de_mirage_wood_ver3_diffuse": wall,
            "models/props_wasteland/prison_objects002": wall_2,
            "de_dust/stonestep04": floor,
            "de_dust/stonestep02": floor,
            "models/props_urban/stoop002": floor,
            "de_dust/door02": wall,
            "de_dust/door04": wall,
            "models/props/de_mirage/wall_hole/wall_hole_diffuse": wall,
            "models/props/de_mirage/wall_hole/sheet_metal_panel": wall_2,
            "models/props/de_mirage/lamp/lamp_diffuse/lamp_diffuse": wall_2,
            "models/cs_italy/blkmetal": wall_2,
            "models/cs_italy/lampholder2a": remove_me,
            "models/cs_italy/light_orange2": wall_2,
            "metal/metal_corrugated03a": wall_2,
            "models/props_interiors/cashregister01": wall_2,
            // collideable trash 
            "models/props_junk/trashclusters01": wall_2,

            // damn you ugly get out my map
            "decals/sanddecal01": remove_me,
            "decals/sanddecal02": remove_me,
            "decals/win_square": remove_me,
            "models/props_junk/physics_trash_hospital": remove_me,
            "decals/hpe_plaster_decal_decay_brick_04": remove_me,
            "decals/hpe_plaster_decal_decay_brick_06": remove_me,
            "decals/decalstain015a": remove_me,
            "decals/win_rectang": remove_me,
            "decals/drainage_stain_01": remove_me,
            "decals/decalstain002a": remove_me,
            "decals/drainage_stain_03": remove_me,
            "decals/dust_poster3": remove_me,
            "decals/hpe_plaster_decal_decay_04": remove_me,
            "decals/hpe_plaster_decal_decay_brick_03": remove_me,
            "decals/hpe_plaster_decal_decay_brick_04": remove_me,
            "decals/hpe_plaster_decal_decay_brick_06": remove_me,
            "de_mirage/decals/poster_b_decal": remove_me,
            "decals/debris_exterior_00": remove_me,
            "decals/trashdecal05a": remove_me,
            "decals/infwalldetail09": remove_me,
            "models/props/cs_assault/camera": remove_me,
            "overlays/urban_paintswatch_01a": remove_me,
            "overlays/urban_paintswatch_02a": remove_me,
            "overlays/urban_paintswatch_03a": remove_me,
            "overlays/urban_paintswatch_04a": remove_me,
            "models/props_urban/plastic_junk001": remove_me,
            "models/props_junk/metalbucket01a": remove_me,
            "decals/decalstain015a": remove_me,
            "decals/stain01": remove_me,
            "decals/trashdecal01a": remove_me,
            "decals/trashdecal04a": remove_me,
            "models/props_debris/composite_debris2": remove_me,
            "decals/decalrug005a": remove_me,
            "models/props/de_inferno/infwllf": remove_me,
            "models/props_lab/powerbox001": remove_me,
            "models/props_pipes/pipeset02d_512_001a": remove_me,
            "models/props_pipes/pipeset_metal": remove_me,
            "models/props/props_utilities/electric_cables01": remove_me,
            "overlays/trash_01": remove_me,
            "decals/trashdecal02a": remove_me,
            "decals/hr_decals/plaster_stain_7": remove_me,
            "models/cs_italy/mkt_container3": remove_me,
            "models/props/cs_assault/wall_wires1": remove_me,
            "models/props_c17/potspans001a": remove_me,
            "decals/trashdecal01b": remove_me,
            "de_mirage/decals/window_b_decal": remove_me,
            "decals/trash_00": remove_me,
            "models/props_junk/cinderblock01a": wall_2,
            "decals/plaster011a": remove_me,
            "decals/plaster017a": remove_me,
            "models/props_wasteland/prison_switchbox01": remove_me,
            "models/props_wasteland/prison_objects004": remove_me,
            "decals/decalrug003a": remove_me,
            "decals/decalrug004a": remove_me,
            "decals/decalrug001a": remove_me,
            "models/props/de_dust/sign_shop01": remove_me,
            "decals/decalstain005a": remove_me,
            "decals/rug_green01": remove_me,
            "models/props_junk/food_used": remove_me,
            "de_mirage/decals/poster_a_decal": remove_me,
            "de_mirage/decals/poster_b_decal": remove_me,
            "de_mirage/decals/poster_c_decal": remove_me,
            "decals/prodplatea": remove_me,
            "decals/milswitch001": remove_me,
            "decals/offpapers03": remove_me,
            "models/props/de_prodigy/prodwlla": remove_me,
            "models/props/de_dust/sign_street01": remove_me,
            "decals/dust_poster5": remove_me,
            "decals/plaster013a": remove_me,
            "models/props/de_vostok/hardwareitems01": remove_me,
            "decals/debris_concrete001a": remove_me,
            "decals/infwalldetail10": remove_me,
            "brick/infwllg_overlay_a": remove_me,
            "models/props_junk/garbage002a_01": remove_me,
            "models/props_interiors/bucket_tools": remove_me,
            "models/props/cs_italy/paint_roller": remove_me,
            "models/props_junk/cardboard_boxes001a": remove_me,
            "models/props_junk/garbage003a_01": remove_me,
            "decals/milrug001": remove_me,
            "de_mirage/decals/sign_b_decal": remove_me,
            "de_mirage/decals/window_a_decal": remove_me,
            "de_train/train_cement_stain_01": remove_me,
            "decals/trashdecal03a": remove_me,
            "decals/infwalldetail02": remove_me,
            "decals/decalstain001a": remove_me,
            "decals/decalstain011a": remove_me,
            "decals/graffiti01": remove_me,
            "decals/graffiti02": remove_me,
            "models/props/cs_italy/hpe_italy_pipe_wall": remove_me,
            "concrete/street_overlay_parkingstripe": remove_me,
            "decals/decalmetalmanhole004a": remove_me,
            "overlays/shacks_beverage": remove_me,
            //"de_mirage/wood/de_mirage_wood_ver3_diffuse": remove_me,
            "models/props/de_mirage/wood_roof_plank/wood_ver3_diffuse": remove_me,
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
        // A site tower
        "models/props/de_mirage/towertop_d/towertop_d": {
            basetexture: "dev/dev_measurewall01a",
            basetexture2: "dev/dev_measurewall01a",
            basetexturetransform: "center .5 .5 scale 4 4 rotate -90 translate 0 0",
            bumpmap: "",
            bumpmap2: "",
            envmap: "",
        },

        "models/props/de_mirage/towertop_e/towertop_e": {
            basetexture: "dev/dev_measurewall01a",
            basetexture2: "dev/dev_measurewall01a",
            basetexturetransform: "center .5 .5 scale 4 4 rotate 180 translate 0 0",
            bumpmap: "",
            bumpmap2: "",
            envmap: "",
        },

        // doesnt want to dissapear half the time for some reason
        "models/props_junk/garbage001a_01": {
            basetexture: "dev/dev_measurewall01d",
            basetexture2: "dev/dev_measurewall01d",
            alpha: "0",
            translucent: "1",
            detail: "",
            bumpmap: "",
            bumpmap2: "",
            envmap: "",
        },

        "models/props_junk/physics_trash": {
            basetexture: "dev/dev_measurewall01d",
            basetexture2: "dev/dev_measurewall01d",
            alpha: "0",
            translucent: "1",
            detail: "",
            bumpmap: "",
            bumpmap2: "",
            envmap: "",
        },
    }
}




exports.mapData = mapData;

exports.mapData = {


    overriddenMapName: "de_mirage",

    mapName: "LSD Mirage",


    onLoad: function () {

    },

    onUnload: function () {

    },

    hsvTORGB: function (h, s, v, a) {
        var r, g, b;
        var i;
        var f, p, q, t;

        h = Math.max(0, Math.min(360, h));
        s = Math.max(0, Math.min(100, s));
        v = Math.max(0, Math.min(100, v));

        s /= 100;
        v /= 100;

        if (s == 0) {
            r = g = b = v;
            return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), a];
        }

        h /= 60;
        i = Math.floor(h);
        f = h - i;
        p = v * (1 - s);
        q = v * (1 - s * f);
        t = v * (1 - s * (1 - f));

        switch (i) {
            case 0:
                r = v;
                g = t;
                b = p;
                break;

            case 1:
                r = q;
                g = v;
                b = p;
                break;

            case 2:
                r = p;
                g = v;
                b = t;
                break;

            case 3:
                r = p;
                g = q;
                b = v;
                break;

            case 4:
                r = t;
                g = p;
                b = v;
                break;

            default: // case 5:
                r = v;
                g = p;
                b = q;
        }

        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), a];
    },

    onDraw: function () {
        var it = 0;
        for (material in this.materialOverrides) {
            var curtime = Globals.Curtime();

            var color = this.hsvTORGB(Math.abs(Math.sin(curtime + it) * 360), 75, 100, 255);
            var alpha = Math.abs(Math.sin(curtime + it));

            this.materialOverrides[material].color = '{' + color[0] + ' ' + color[1] + ' ' + color[2] + '}';
            this.materialOverrides[material].alpha = alpha.toString();


            it += 2;
        }
        return true;
    },

    // this is where you will define the materials you override and how to do it
    materialOverrides: {
        "de_mirage/marble/marble_01": { color: "{0 0 0}", alpha: "0" },
        "de_mirage/tile/de_mirage_tile_ver4_diffuse": { color: "{0 0 0}", alpha: "0" },
        "concrete/concrete_ext_07": { color: "{0 0 0}", alpha: "0" },
        "concrete/concrete_floor_04": { color: "{0 0 0}", alpha: "0" },
        "wood/milbeams003": { color: "{0 0 0}", alpha: "0" },
        "models/props/de_mirage/wood_roof_plank/wood_ver3_diffuse": { color: "{0 0 0}", alpha: "0" },
        "wood/woodbeam001a": { color: "{0 0 0}", alpha: "0" },
        "de_mirage/wood/de_mirage_wood_ver3_diffuse": { color: "{0 0 0}", alpha: "0" },
        "models/props/de_dust/hr_dust/dust_crates/dust_shipping_crate_02_wood_color": { color: "{0 0 0}", alpha: "0" },
        "wood/woodfloor005a": { color: "{0 0 0}", alpha: "0" },
        "wood/wood_int_02": { color: "{0 0 0}", alpha: "0" },
        "wood/milcab001": { color: "{0 0 0}", alpha: "0" },
        "models/props/de_mirage/large_door_b/large_door_b": { color: "{0 0 0}", alpha: "0" },
        "models/props/de_mirage/wall_arch_a/wall_arch_a1": { color: "{0 0 0}", alpha: "0" },
        "models/props_urban/curbs001": { color: "{0 0 0}", alpha: "0" },
        "de_mirage/tile/de_mirage_tile_ver4_blend": { color: "{0 0 0}", alpha: "0" },
        "de_dust/tilefloor02": { color: "{0 0 0}", alpha: "0" },
        "de_dust/tilefloor01": { color: "{0 0 0}", alpha: "0" },
        "cs_italy/hpe_plaster_yellow_wall": { color: "{0 0 0}", alpha: "0" },
        "plaster/plaster_int_02": { color: "{0 0 0}", alpha: "0" },
        "de_mirage/plaster/de_mirage_plaster_blue1_blend": { color: "{0 0 0}", alpha: "0" },
        "de_mirage/plaster/de_mirage_plaster_blue1_diffuse": { color: "{0 0 0}", alpha: "0" },
        "de_dust/marketwall05a": { color: "{0 0 0}", alpha: "0" },
        "de_dust/marketwall02": { color: "{0 0 0}", alpha: "0" },
        "decals/sanddecal01": { color: "{0 0 0}", alpha: "0" },
        "decals/sanddecal02": { color: "{0 0 0}", alpha: "0" },
        "models/props/de_mirage/wall_hole/wall_hole_diffuse": { color: "{0 0 0}", alpha: "0" },
        "de_mirage/decals/wall_worna_decal": { color: "{0 0 0}", alpha: "0" },
        "decals/hpe_plaster_decal_decay_brick_04": { color: "{0 0 0}", alpha: "0" },
        "decals/hpe_plaster_decal_decay_brick_06": { color: "{0 0 0}", alpha: "0" },
        "decals/infwalldetail10": { color: "{0 0 0}", alpha: "0" },
        "de_mirage/hr_mirage/mirage_plaster_2": { color: "{0 0 0}", alpha: "0" },
        "models/props/de_mirage/bench_a/bench_a": { color: "{0 0 0}", alpha: "0" },
        "models/props/de_vostok/trashcans": { color: "{0 0 0}", alpha: "0" },
        "de_mirage/ground/de_mirage_ground_tilec_blend_diffuse ": { color: "{0 0 0}", alpha: "0" },
        "de_mirage/ground/de_mirage_ground_tileh_blend2_diffuse": { color: "{0 0 0}", alpha: "0" },
        "de_mirage/ground/de_mirage_tilef_diffuse": { color: "{0 0 0}", alpha: "0" },
        "de_mirage/ground/de_mirage_ground_tileh_blend_diffuse ": { color: "{0 0 0}", alpha: "0" },
        "de_mirage/hr_mirage/mirage_plaster_blend_3": { color: "{0 0 0}", alpha: "0" },
        "de_mirage/plaster/de_mirage_plaster_salmon1_blend": { color: "{0 0 0}", alpha: "0" },
        "de_mirage/brick/de_mirage_brick_ver2_blend_update": { color: "{0 0 0}", alpha: "0" },
        "de_mirage/brick/de_mirage_brick_ver2_blend2_diffuse": { color: "{0 0 0}", alpha: "0" },
        "de_mirage/brick/de_mirage_brick_ver1_diffuse": { color: "{0 0 0}", alpha: "0" },
        "de_mirage/brick/de_mirage_brick_ver1pl_blend_diffuse": { color: "{0 0 0}", alpha: "0" },
        "de_mirage/base/de_mirage_top_ver1_blend": { color: "{0 0 0}", alpha: "0" },
        "de_mirage/base/de_mirage_top_ver1_diffuse": { color: "{0 0 0}", alpha: "0" },
        "de_mirage/hr_mirage/mirage_plaster_1": { color: "{0 0 0}", alpha: "0" },
        "de_dust/sitebwall07a": { color: "{0 0 0}", alpha: "0" },
        "brick/brick_ext_04": { color: "{0 0 0}", alpha: "0" },
        "de_mirage/plaster/de_mirage_plaster_salmon1_diffuse": { color: "{0 0 0}", alpha: "0" },
        "de_mirage/base/de_mirage_base_ver1_blend": { color: "{0 0 0}", alpha: "0" },
        "de_mirage/brick/de_mirage_brick_ver1_blend": { color: "{0 0 0}", alpha: "0" },
        "overlays/shacks_beverage": { color: "{0 0 0}", alpha: "0" },
        "de_mirage/base/de_mirage_mid_ver1_diffuse": { color: "{0 0 0}", alpha: "0" },
        "de_dust/sitebwall13a": { color: "{0 0 0}", alpha: "0" },
        "models/props/de_mirage/brush_shapes/sitebwall13a": { color: "{0 0 0}", alpha: "0" },
        "de_mirage/base/de_mirage_base_trim_ver1_diffuse ": { color: "{0 0 0}", alpha: "0" },
        "de_dust/sitebwall08a": { color: "{0 0 0}", alpha: "0" },
        "models/props/de_dust/dust_arch_small": { color: "{0 0 0}", alpha: "0" },
        "de_dust/residwall04a": { color: "{0 0 0}", alpha: "0" },
        "models/props/cs_assault/wall_wires1": { color: "{0 0 0}", alpha: "0" },
        "models/props/props_utilities/electric_cables01": { color: "{0 0 0}", alpha: "0" },
        "models/props/de_mirage/towertop_d/towertop_d": { color: "{0 0 0}", alpha: "0" },
        "de_mirage/decals/window_b_decal": { color: "{0 0 0}", alpha: "0" },
        "decals/win_square": { color: "{0 0 0}", alpha: "0" },
        "models/de_dust/windows/window_4x8_square_flat": { color: "{0 0 0}", alpha: "0" },
        "concrete/blend_blacktopsand_01": { color: "{0 0 0}", alpha: "0" },
        "wood/plywood02": { color: "{0 0 0}", alpha: "0" },
        "wood/woodfloor005a": { color: "{0 0 0}", alpha: "0" },
        "cs_italy/hpe_plaster_trim_light": { color: "{0 0 0}", alpha: "0" },
        "cs_italy/hpe_plaster_tan_wall": { color: "{0 0 0}", alpha: "0" },
        "tile/tile_mall_floor00": { color: "{0 0 0}", alpha: "0" },
        "cs_italy/hpe_plaster_tint_tan": { color: "{0 0 0}", alpha: "0" },
        "models/props/de_dust/sign_shop01": { color: "{0 0 0}" }
    }
}

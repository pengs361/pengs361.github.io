/usr/share/jellyfin/web/main.jellyfin.bundle.js



Force backdrops for all users (10.8.x)

Modify this string in your main.jellyfin.bundle.js to default it to tick (forcing most users default.. unless disabled by them)

    enableBackdrops:function(){return P}

Change it to

    enableBackdrops:function(){return _}


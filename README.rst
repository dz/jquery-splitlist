jquery-splitlist
================

Takes an unordered list and splits it into multiple ``divs``.
You can float the divs so it looks like multiple columns/lists.

Usage
-----

::

     $(".dropdown ul").splitList(3);
     $(".dropdown ul").splitList(3, { wrapClass: "div_class_name" });

By default, wrapClass is set to ``""``.


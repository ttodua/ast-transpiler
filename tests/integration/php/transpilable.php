<?php
function custom_echo($x){ echo (string)$x . "
";}
class Second {
    public function stringifyNumber($arg) {
        return ((string) $arg);
    }
}
class Test {
    public function test() {
        $a = 1;
        $b = 2;
        $c = $a + $b;
        custom_echo($c); // should print 3
        $s1 = 'a';
        $s2 = 'b';
        $s3 = $s1 . $s2;
        custom_echo($s3); // should print "ab"
        $x = false;
        if ($x) {
            custom_echo('x is true');
        } else {
            custom_echo('x is false'); // should print "x is false"
        }
        $instance = new Second();
        custom_echo($instance->stringifyNumber(4)); // should print 4
        $arr = [1, 2, 3, 4];
        $first = $arr[0];
        custom_echo($first); // should print 1
        $dict = array(
            'a' => 'b',
        );
        custom_echo($dict['a']); // should print "b"
    }
}

?>
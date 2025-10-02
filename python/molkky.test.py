import unittest
from molkky import *

class TestStringMethods(unittest.TestCase):

    def test_addition(self):
        self.assertEqual(addition(9, 16), 25)

if __name__ == '__main__':
    unittest.main()

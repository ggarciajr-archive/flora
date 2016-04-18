module Helpers.Tokens (
  generateToken
) where

import ClassyPrelude
import Data.Char
import Safe (atNote)
import System.Random

generateToken :: RandomGen g => g -> Int -> Text
generateToken randomGen numOfChars =
  let chars = filter isAlphaNum ['0'..'z'] -- generates a list of eligible chars for the token
      -- given a list of 'random' numbers, returns the list of number resulting
      -- by the application of: generated number mod number of eligible chars.
      -- this ensures that we won't use an invalid index when trying to get
      -- a char from the list of eligible chars using the generated numbers.
      ints = (\i -> i `mod` length chars) <$> take numOfChars (randoms randomGen :: [Int])
      token = pack $ map (atNote "invalid index of chars array" chars) ints
  in token

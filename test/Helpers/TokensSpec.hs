module Helpers.TokensSpec (spec) where

import System.Random
import Helpers.Tokens
import TestImport

spec :: Spec
spec = do
    describe "Tokens" $ do
        it "generates a token of a given length " $ do
          g <- newStdGen
          g' <- newStdGen

          let token1 = generateToken g 10
              token2 = generateToken g' 10

          token1 == token2 `shouldBe` False

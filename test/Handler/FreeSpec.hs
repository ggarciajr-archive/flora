module Handler.FreeSpec (spec) where

import TestImport

spec :: Spec
spec = withApp $
    it "loads the /free and checks if it looks right" $ do
        get FreeR
        statusIs 200

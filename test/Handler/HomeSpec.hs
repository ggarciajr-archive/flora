module Handler.HomeSpec (spec) where

import TestImport

spec :: Spec
spec = withApp $
    it "loads the index and checks it looks right" $ do
        get HomeR
        statusIs 200

        -- more debugging printBody
        htmlCount ".header" 1
        htmlCount ".splash" 1
        htmlCount ".splash" 1
        htmlCount ".content" 2
        htmlCount ".ribbon" 1
        htmlCount ".footer" 1

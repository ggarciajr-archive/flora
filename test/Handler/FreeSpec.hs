module Handler.FreeSpec (spec) where

import TestImport

spec :: Spec
spec = withApp . describe "free route should" $ do
    -- Accessing the free session page using an invalid token
    -- should result in a 404 error.
    it "/free/invalid should return 404" $ do
      get ("/free/invalid" :: Text)
      statusIs 404

    -- Accessing the free session page without using a token should
    -- generate a new token, a new project, and a new user, and redirect
    -- the user to the generated unique URL.

    {--
    it "/free should redirect to a newly created free session" $ do
        get FreeR
        statusIs 303
        r <- followRedirect
        fss <- runDB fetchFreeSessionIdents
        liftIO $ isRight r `shouldBe` True
        liftIO $ length fss `shouldBe` 1
        let freeSessionUid = concatMap unFreeSessionUid fss
            uri = ("/free/" :: Text) `append` freeSessionUid
        liftIO $ fmap (\u -> takeEnd 12 u == uri) r `shouldBe` Right True
        statusIs 200
    --}

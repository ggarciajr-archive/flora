module Handler.Free (
  getFreeR,
  getFreeSessionR
) where

import Import

-- | Generates a new free session identifier and redirects the user to
-- \/free\/generated-identifier
getFreeR :: Handler Html
getFreeR = do
  --master <- getYesod

  defaultLayout $ do
      setTitleI MsgTitle
      $(widgetFile "free")

-- | Render the free session page if the provided free session
-- identifier exists, otherwise returns a 404 error.
getFreeSessionR :: FreeSessionUid -> Handler Html
getFreeSessionR freeSessionIdent = do
  --master <- getYesod
  when (freeSessionIdent == FreeSessionUid("invalid")) $
    notFound

  defaultLayout $ do
      setTitleI MsgTitle
      $(widgetFile "free")

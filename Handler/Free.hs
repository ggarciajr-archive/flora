module Handler.Free (
  getFreeR,
  getFreeSessionR
) where

import Import

import Queries.FreeSession

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
  sessionData <- runDB $ fetchFreeSessionProjectUser freeSessionIdent
  case sessionData of
    Just _ ->
      defaultLayout $ do
        setTitleI MsgTitle
        $(widgetFile "free")
    Nothing -> notFound

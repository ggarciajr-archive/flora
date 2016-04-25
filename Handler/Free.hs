module Handler.Free (
  getFreeR
) where

import Import

getFreeR :: Handler Html
getFreeR = do
    --master <- getYesod

    defaultLayout $ do
        setTitleI MsgTitle
        $(widgetFile "free")

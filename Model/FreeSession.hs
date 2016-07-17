{-|
Module     :  Model.FreeSession
Description:  Defines the FreeSession model

FreeSession model is composed by a Persistent model and of
an id type.
-}
module Model.FreeSession where

import ClassyPrelude
import Yesod

-- | The FreeSessionUid type is used to have stronged typed URIs.
--
-- We won't be able create a URI like \/free/\#FreeSessionUid using
-- an UserId for example.
newtype FreeSessionUid = FreeSessionUid { unFreeSessionUid :: Text }
  deriving (Show, Read, Eq, PathPiece, PersistField)

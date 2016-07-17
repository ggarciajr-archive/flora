{-|
Module     :  Model.FreeSession
Description:  Defines the FreeSession model

FreeSession model is composed by a Persistent model and of
an id type.
-}
module Model.FreeSession where

import ClassyPrelude
import Database.Persist.TH
import Model.User
import Yesod

-- | The FreeSessionUid type is used to have stronged typed URIs.
--
-- We won't be able create a URI like \/free/\#FreeSessionUid using
-- an UserId for example.
newtype FreeSessionUid = FreeSessionUid { unFreeSessionUid :: Text }
  deriving (Show, Read, Eq, PathPiece, PersistField)

-- | Defines the FreeSession entity.
share [mkPersist sqlSettings] [persistLowerCase|
FreeSession sql=free_sessions
  ident                 FreeSessionUid       sqltype=text
  userId                UserId               reference=users   sqltype=int4
  createdAt             UTCTime              default=now()
  deriving Show Eq Typeable
|]

{-|
Module     :  Model.Project
Description:  Defines the Project model
-}
module Model.Project where

import ClassyPrelude
import Database.Persist.TH
import Model.User

-- | Defines the Project entity.
share [mkPersist sqlSettings] [persistLowerCase|
Project sql=projects
  name                  Text                                   sqltype=text
  userId                UserId               reference=users   sqltype=int4
  createdAt             UTCTime              default=now()
  updatedAt             UTCTime              default=now()
  accessedAt            UTCTime              default=now()
  primaryProject        Bool                 default=false
  deriving Show Eq Typeable
|]

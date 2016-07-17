{-|
Module     :  Queries.FreeSession
Description:  Queries free session data.
-}
module Queries.FreeSession where

import ClassyPrelude hiding (on)
import Database.Esqueleto hiding (Value)
import Model.FreeSession
import Model.Project
import Model.User

-- | Fetches the user and project ids related to a free session.
fetchFreeSessionProjectUser :: MonadIO m
                            => FreeSessionUid
                            -> SqlPersistT m (Maybe (UserId, ProjectId))
fetchFreeSessionProjectUser freeSessionUid =
  liftM (listToMaybe . (map (\((Entity uId _), (Entity pId _)) -> (uId, pId)))) $
  select $
    from $ \(free `InnerJoin` users `InnerJoin` projects) -> do
      on (users ^. UserId ==. projects ^. ProjectUserId)
      on (users ^. UserId ==. free ^. FreeSessionUserId)
      where_ (free ^. FreeSessionIdent ==. val freeSessionUid)
      return (users, projects)

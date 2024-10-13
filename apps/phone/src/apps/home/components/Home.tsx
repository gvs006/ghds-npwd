import React from 'react';
import { AppWrapper } from '@ui/components';
import { Box } from '@mui/material';
import { GridMenu } from '@ui/components/GridMenu';
import { useApps } from '@os/apps/hooks/useApps';
import { useExternalApps } from '@common/hooks/useExternalApps';

export const HomeApp: React.FC = () => {
  const { apps } = useApps();
  const externalApps = useExternalApps();
  return (
    <AppWrapper>
      <Box component="div" mt={3} px={0}>
        {apps && <GridMenu xs={3} items={[...apps, ...externalApps]} />}
      </Box>

      {/* TODO BOTTOM MENU GHDS */}
      {/* <div className="absolute bottom-5 left-4 right-4">
        <div className="h-32 w-full rounded-md bg-gray-200/30 backdrop-blur">
          {apps &&
            apps.slice(0, 4).map((app) => (
              <div className="float-left h-full w-1/4" key={app.id}>
                <div className="flex h-full w-full items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-md bg-gray-200/50 backdrop-blur">
                    {app.icon}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div> */}
    </AppWrapper>
  );
};

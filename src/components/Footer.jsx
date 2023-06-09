import { createStyles, Anchor, Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react';
import Logo from '../images/grayish.png'

export function FooterCentered({ links }) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor
      color="dimmed"
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>

        <img className='w-32' src={Logo}/>

        <Group className={classes.links}>{items}</Group>

        <Group spacing="xs" position="right" noWrap>
          <ActionIcon size="xl" variant="default" radius="xl">
            <IconBrandTwitter className='text-blue-500' size="1.40rem" stroke={1.9} />
          </ActionIcon>
          <ActionIcon className='text-blue-500' size="xl" variant="default" radius="xl">
            <IconBrandFacebook size="1.40rem" stroke={1.9} />
          </ActionIcon>
          <ActionIcon size="xl" variant="default" radius="xl">
            <IconBrandInstagram className='text-[#E1306C]' size="1.40rem" stroke={1.9} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}


const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    marginLeft: 50,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.md} ${theme.spacing.md}`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));
